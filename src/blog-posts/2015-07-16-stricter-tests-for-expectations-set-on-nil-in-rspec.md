---
title: Stricter Tests for Expectations Set on Nil in RSpec
path: '/blog/stricter-tests-for-expectations-set-on-nil-in-rspec'
date_published: 2015-07-16T10:17:45.000Z
---

Things have been quiet around here as I have been pursuing a few interesting opportunities, the newest of which is a technical fellowship at Square in San Francisco. I've spent the last three weeks on the Data Platform team, learning how to install some plumbing to clean and move data around to new & exotic locations. Today I published my first blog post over on the Square Engineering blog, The Corner! It's about RSpec!

Originally published on the [Square Engineering Blog](http://squ.re/1f3YlFd).

##Stricter Tests for Expectations Set on Nil in RSpec
####Make your RSpec tests fail when expectations are set on nil.

When I started on one of my first pieces of code here at Square, I was tasked with making sure a Ruby program from the Data Platform team didn’t continuously retry queries on data when the program hit a non-transient error. Our logs were getting filled up with info about multiple queries even after an error — such as table not found. No matter how many times we retried, the table was not going to be found! So as I set out to prevent some of these excessive queries, I started with our tests.

####Dumb tests lead to dumb code
As my teammates reviewed my code, they spotted a bug pretty quickly: I had been refactoring some of the variables, and in the middle of doing so, I forgot to ensure that my instance variables were properly instantiated. I had over eagerly changed our @logger to logger in our initialize method of the class in question. It’s an easy mistake to make, and luckily an easy one to spot. We quickly caught the bug in code review and were left wondering why our tests still passed. We ran the tests locally again. I skimmed the output of the build tied to the PR. Everything was green.

After a few “huh, that’s weird”s, we decided to run the tests one more time just to see what would happen. This time we watched the tests. Sure enough, they were still green, but this time around we saw there was some output that blew by the screen that we hadn’t seen before. They were warnings from RSpec!

This brought to light two common problems with testing:

1. Developers are lazy: if you have to scroll up to see the output, you probably won’t.
2. If everything’s green, problems in your tests won’t be seen.

#####Stricter tests for better code
To solve the above problems, which admittedly are not really the fault of testing itself, we thought it would be beneficial to force a test to fail when an expectation is set on nil. In RSpec-mocks, there’s already the option to set a flag in your test to suppress the warning messages. We wanted something more strict for our code; we wanted the test to fail when we put an expectation on nil. Let’s catch those false positives!

We started out by simply mimicking the behavior of what was already in place for suppressing the warning messages. There’s a method you can call in your test, `allow_message_expectations_on_nil`, to do this. We went about implementing a `disallow_message_expectations_on_nil` method in the exact same manner. When discussing how to implement this, we immediately thought about how great it would be to have this as a config flag that you could simply set in your RSpec configuration but decided against doing so immediately. Since it was a small but new feature for the library, we decided it would be best to do the minimal viable implementation and open a PR so that we could get feedback from the maintainers on whether it was even something they would want to integrate first.

Of course, one of the first comments from the maintainers was that yes, they would like to include the feature, but wouldn’t it be better as a global config? It was suggested that we implement this stricter testing configuration like so:

```
RSpec.configure do |config|
  config.mock_with :rspec do |mocks|
    mocks.allow_message_expectations_on_nil = false
  end
end
```

By refactoring the `allow_message_expectations_on_nil` flag, we were not only able to move it into a place where you’d no longer have to call that API for each test in which you wanted that setting, but we also expanded the options for how the mocks should behave. Previously, the only options were to allow with a warning or to allow and suppress the warning.

Now, we have the following options that can be set inside the RSpec mocks configuration:

- Do nothing with the config flag & retain the default behavior: RSpec will warn the user when an expectation has been set on nil, but the test will not fail (original behavior).
- Set `allow_expectations_on_nil` to true:
  RSpec will suppress the warning messages (original behavior).
- Set `allow_expectations_on_nil` to false: RSpec will fail the test when the expectation has been set on nil (new behavior).

#####Testing the testing framework
One of the benefits to this change was that we were able to refactor some of the code already in place for the warning. While previously it was just a method inside of the `ProxyForNil` class that called `Kernel.warn(‘message here’)` with a hardcoded string, we were able to clean it up by using the `ErrorGenerator` class that had to be created at some later point. The `ProxyForNil` class in fact already had an instance of the `ErrorGenerator` instantiated, but it wasn’t being used. Now when either the default behavior of warning or the newer implementation that raises an error is called , both methods use the `ErrorGenerator` class. This not only creates a more consistent implementation of errors and warnings, but it also allows for more precision in the testing of the framework itself!

Another other major challenge in contributing to a testing framework is wrapping your head around using the framework to test itself. It’s much harder to read tests where the wording you use to test it is the same wording you are testing. Eventually, we got to the point where our test included this line that appears a bit mind-boggling at first:

```
expect { expect(nil).to receive(:foo) }.to raise_error(RSpec::Mocks::MockExpectationError)
```

After getting to the point where we could expect all our expectations to behave the way we wanted, another challenge was figuring out how to test the configuration of the framework without changing the configuration for the whole suite from within your test. This stumped me for quite some time. We could get my test passing when we used the new feature to disallow expectations on nil, but then the stricter configuration would fail other tests in the suite!

Thankfully after poking around in the other tests that we suspected would encounter a similar problem, we found a handy shared context in the library’s `spec_helper` file:

```ruby
context 'configured to disallow expectations on nil' do
       include_context 'with isolated configuration'
        it 'raises an error when expectations on nil are disallowed' do
          RSpec::Mocks.configuration.allow_message_expectations_on_nil = false
          expect { expect(nil).to receive(:foo)     }.to raise_error(RSpec::Mocks::MockExpectationError)
          expect { expect(nil).not_to receive(:bar) }.to raise_error(RSpec::Mocks::MockExpectationError)
        end
      end
```

By including the shared context of the isolated configuration, testing the testing framework became easy. It also helps when the maintainers of the library are as helpful, responsive, and welcoming as the Rspec team — special thanks to Jon Rowe, Xavier Shay, and Myron Marston and the rest of the team!

#####Merged!
The PR was successfully merged and put in place for you to use. Next time you run your test suite, consider forcing stricter tests by disallowing expectations on nil and see how many previously passing tests were false positives.

jibble_test
===========

A repo that holds my test progress for Jibble interview.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jibble_test.svg)](https://npmjs.org/package/jibble_test)
[![Downloads/week](https://img.shields.io/npm/dw/jibble_test.svg)](https://npmjs.org/package/jibble_test)
[![License](https://img.shields.io/npm/l/jibble_test.svg)](https://github.com/aajiwani/jibble_test/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g jibble_test
$ jibble_test COMMAND
running command...
$ jibble_test (-v|--version|version)
jibble_test/0.0.1 linux-x64 node-v16.6.0
$ jibble_test --help [COMMAND]
USAGE
  $ jibble_test COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jibble_test hello`](#jibble_test-hello)
* [`jibble_test help [COMMAND]`](#jibble_test-help-command)
* [`jibble_test list_people`](#jibble_test-list_people)
* [`jibble_test person`](#jibble_test-person)
* [`jibble_test search_people`](#jibble_test-search_people)

## `jibble_test hello`

Describe the command here

```
USAGE
  $ jibble_test hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/aajiwani/jibble_test/blob/v0.0.1/src/commands/hello.js)_

## `jibble_test help [COMMAND]`

display help for jibble_test

```
USAGE
  $ jibble_test help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `jibble_test list_people`

Lists people using public OData API

```
USAGE
  $ jibble_test list_people

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Using public OData API, lists available people information on it
```

_See code: [src/commands/list_people.js](https://github.com/aajiwani/jibble_test/blob/v0.0.1/src/commands/list_people.js)_

## `jibble_test person`

Searches and lists a person using its identifier over public OData API

```
USAGE
  $ jibble_test person

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Using public OData API, tries to search an individual and list the attributes associated with him/her
```

_See code: [src/commands/person.js](https://github.com/aajiwani/jibble_test/blob/v0.0.1/src/commands/person.js)_

## `jibble_test search_people`

Searches people using public OData API

```
USAGE
  $ jibble_test search_people

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Using public OData API, searches available people information on it
```

_See code: [src/commands/search_people.js](https://github.com/aajiwani/jibble_test/blob/v0.0.1/src/commands/search_people.js)_
<!-- commandsstop -->

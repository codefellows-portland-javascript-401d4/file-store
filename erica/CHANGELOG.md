# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added

## [1.0.1] - 2016-10-18
### Changed
- Updated the implementation of the type checking to be more accurate in distinguishing arrays from other objects.
- Fixed linter errors.

## [1.0.0] - 2016-10-18
### Added
- API Changed! Incompatible with pre-release versions. You now *must* pass the identifier to save/search for in the call.
- Module can now take different data types and still use their information to store them as files.

## [0.3.0] - 2016-10-18
### Added
- Module can now retrieve the contents of a single file and pass parsed json to the caller.
- Test for selecting and reading a specific file pass.

## [0.2.0] - 2016-10-18
### Added
- Module can now retrieve the contents of a directory and pass it as an array to the caller.
- Test for creating files in a dir and retrieving them pass.

## [0.1.1] - 2016-10-18
### Added
- Test for index.js file name passes: directory is deleted before each pass and recreated, then filled with data and checked.
- Test for index.js content passes: dir is deleted and recreated, file is created, content is checked for a match to dummy object.

## [0.1.0] - 2016-10-18
### Added
- index.js now contains a working, but untested, file writing implementation

## [0.0.1] - 2016-10-18
### Added
- NPM installed linter and Mocha
- Created package.modules
- Added eslintrc and travis.yml files for testing
- Added LICENSE file and a README
- Started this change log
- Forked from https://github.com/codefellows-portland-javascript-401d4/file-store



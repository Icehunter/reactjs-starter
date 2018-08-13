#!/bin/sh

# get standard flow-types
./node_modules/.bin/flow-typed update --overwrite

# stub out problem libraries/incorrect flow-types
./node_modules/.bin/flow-typed create-stub history

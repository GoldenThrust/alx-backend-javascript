#!/bin/env bash

for i in {0..10}
do
    cp -r node_modules *.json task_${i}
done
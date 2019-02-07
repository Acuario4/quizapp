#!/bin/bash

cd `dirname $0`

mvn --batch-mode release:prepare || exit 1
mvn release:perform || exit 1

scp quizapp-backend/target/quizapp.jar lennart@oslo.vygen.de:

ssh lennart@oslo.vygen.de ./install-quizapp.sh




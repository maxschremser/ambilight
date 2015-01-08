MOCHA_OPTS=
REPORTER=list

all:	clean test pack

test:
	./node_modules/.bin/mocha --reporter $(REPORTER)

pack:
	npm pack

clean:
	rm -f ambilight-*.tgz

.PHONY: test package clean

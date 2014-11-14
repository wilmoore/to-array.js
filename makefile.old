.PHONY: clean test

STANDALONE := to-array
MOCHAFLAGS ?= --reporter spec

clean:
	@$(RM) -fr node_modules $(STANDALONE).js
	@$(RM) -fr npm-debug.log

$(STANDALONE).js: index.js test
	@./node_modules/.bin/browserify --entry $< --outfile $@ --standalone $(STANDALONE)

test: node_modules
	@./node_modules/.bin/mocha $(MOCHAFLAGS)

node_modules: package.json
	@npm prune
	@npm install

bower_register:
	@bower register $(STANDALONE).js `node -e "console.log(require('./package.json').repository.url)"`

release: $(STANDALONE).js

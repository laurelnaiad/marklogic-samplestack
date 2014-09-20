cd ../../..
madge --no-colors --format amd --layout dot --image ./rjs-high-level.png --exclude 'domain/|dialogs/|directives/|services/|states/|/deps' ./src
madge --no-colors --format amd --layout dot --image ./rjs-dependencies.png --exclude '_marklogic/(?!deps|module|marklogic)|app/(?!deps|module)|mockedApp|mocks/index' ./src
madge --no-colors --format amd --layout dot --image ./rjs-search-related.png --exclude '_marklogic/(?!module|marklogic|components|services/data/mlSearch)|app/' ./src
madge --no-colors --format amd --layout dot --image ./rjs-app-highlevel.png --exclude 'domain/(?!index)|dialogs/(?!index)|states/(?!index)|directives/(?!index)|services/(?!index)|_marklogic/(?!marklogic)|app/deps|_marklogic/marklogic' ./src
madge --no-colors --format amd --layout dot --image ./rjs-ml-highlevel.png --exclude 'domain/(?!index)|filters/(?!index)|states/(?!index)|directives/(?!index)|services/(?!index)|app/|App|angular-mocks|application|/deps|mocks/index$' ./src
madge --no-colors --format amd --layout dot --image ./rjs-everything.png ./src
rm -rf ./docs/diagrams
mkdir ./docs/diagrams
mv ./rjs-*.png ./docs/diagrams/

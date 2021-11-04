import * as JsSearch from 'js-search';

export default class SearchEngine {
     
    constructor(uid, dataset) {
        console.log("Init engine")
        this.engine = new JsSearch.Search(uid)
        // Index Data
        dataset.forEach(entry => {
            this.engine.addDocument(entry)
        });
    }

    performSearch(searchIndexes, query) {
        // Index Search "Indexes"
        searchIndexes.forEach((index) => {
            this.engine.addIndex(index)
        })

        return this.engine.search(query)
    }


}
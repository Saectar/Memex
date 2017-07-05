import qs from 'query-string'

import extractTimeFiltersFromQuery from 'src/util/nlp-time-filter.js'

const overviewURL = 'overview/overview.html'
export const input = document.getElementById('search')

// Converts an enter press on the input to convert the NLP queries and forward user to overview search
input.addEventListener('keydown', event => {
    if (event.keyCode === 13) { // If 'Enter' pressed
        event.preventDefault() // So the form doesn't submit

        const { extractedQuery: query, startDate, endDate } = extractTimeFiltersFromQuery(input.value)
        const queryParams = qs.stringify({ query, startDate, endDate })

        browser.tabs.create({ url: `${overviewURL}?${queryParams}` }) // New tab with query
        window.close() // Close the popup
    }
})
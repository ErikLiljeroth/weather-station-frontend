const Plotly = require('plotly.js/lib/core')

// Load in the trace type for scatter
Plotly.register([
    require('plotly.js/lib/scatter')
])

module.exports = Plotly
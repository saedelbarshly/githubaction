function greet(name) {
  return `Hello, ${name}`;
}

module.exports = greet;

// if (require.main === module) {
//   console.log(greet("World"));
// }
// curl -X POST \
// > -H "Authorization: token " \
// > -H "Accept: application/vnd.github.v3+json" \
// > https://api.github.com/repos/saedelbarshly/githubaction/dispatches \
// >  -d '{"event_type":"incident_report"}'

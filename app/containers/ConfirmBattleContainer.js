var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    // fetch info from GitHub
  },
  render: function() {
    return (
      <ConfirmBattle />
    )
  }
});

module.exports = ConfirmBattleContainer

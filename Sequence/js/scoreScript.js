
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAVwWMQ6sKURcCdfFQ0OMVEpuDxyTTGaso",
  authDomain: "sequence-9937d.firebaseapp.com",
  databaseURL: "https://sequence-9937d.firebaseio.com",
  storageBucket: "sequence-9937d.appspot.com",
  messagingSenderId: "892776832243"
};
firebase.initializeApp(config);

var refer = firebase.database().ref();
refer.on('value', function (snap) {

  var ScoresOBJ = snap.val();  
  var list = [];

  for (var text in ScoresOBJ) {

    list.push([text, ScoresOBJ[text]]);
 
  }

  list.sort(function(a,b){
    return  b[1] - a[1];
  })


  // class ScoreList extends React.Component {

  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       person: this.props.OnePrp
  //     }
  //   }

  //   componentDidMount() {
  //     this.setState({
  //       person: this.props.OnePrp
  //     });
  //   }

  //   render() {

  //     return (
  //       <div className="table-responsive">
  //         <table className="table table-hover">
  //           <thead>
  //             <tr>
  //               <th style={{ textAlign: 'center' }}>Name</th>
  //               <th style={{ textAlign: 'center' }}>Score</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {this.state.person.map((row, idx) => { return <tr key={idx}>{row.map((text,idx) => { return <td key={idx}>{text}</td> })}</tr> })}
  //           </tbody>
  //         </table>
  //       </div>
  //     )
  //   }
  // }

  // ReactDOM.render(<ScoreList OnePrp={list} />, document.getElementById("container"));


  class ScoreList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      person: this.props.OnePrp
    };
  }

  componentDidMount() {
    this.setState({
      person: this.props.OnePrp
    });
  }

  render() {

    return React.createElement(
      "div",
      { className: "table-responsive" },
      React.createElement(
        "table",
        { className: "table table-hover" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              { style: { textAlign: 'center' } },
              "Name"
            ),
            React.createElement(
              "th",
              { style: { textAlign: 'center' } },
              "Score"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          this.state.person.map((row, idx) => {
            return React.createElement(
              "tr",
              { key: idx },
              row.map((text, idx) => {
                return React.createElement(
                  "td",
                  { key: idx },
                  text
                );
              })
            );
          })
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(ScoreList, { OnePrp: list }), document.getElementById("container"));

});

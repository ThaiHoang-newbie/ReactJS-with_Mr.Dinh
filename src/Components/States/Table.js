import React, { Component } from 'react';

class Table_score extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score1: 0,
            score2: 0,
            score3: 0,
            average: 0,
            scores: []
        };
    }

    myChangeScore1 = (event) => {
        this.setState({ score1: event.target.value });
    }

    myChangeScore2 = (event) => {
        this.setState({ score2: event.target.value });
    }

    myChangeScore3 = (event) => {
        this.setState({ score3: event.target.value });
    }

    pushScoresToArray = () => {
        let a = parseInt(this.state.score1);
        let b = parseInt(this.state.score2);
        let d = parseInt(this.state.score3);
        let c = (a + b + d) / 3;
        this.setState({ average: c });

        const newScore = [a, b, d, c];
        this.setState(prevState => ({
            scores: [...prevState.scores, newScore]
        }));
    }

    render() {
        var heading = ['Score 1', 'Score 2', 'Score 3', 'Average'];
        var body = this.state.scores;
        return (
            <div>
                <label>
                    <p>Score 1</p>
                    <input type='number' min="0" max="10" value={this.state.score1} onChange={this.myChangeScore1} />
                </label>
                <label>
                    <p>Score 2</p>
                    <input type='number' min="0" max="10" value={this.state.score2} onChange={this.myChangeScore2} />
                </label>
                <label>
                    <p>Score 3</p>
                    <input type='number' min="0" max="10" value={this.state.score3} onChange={this.myChangeScore3} />
                </label>
                <button onClick={this.pushScoresToArray}>Click here to see your score</button>
                <Table heading={heading} body={body} />
            </div>
        );
    }
}

class Table extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <table style={{ width: 500 }}>
                <thead>
                    <tr>
                        {
                            heading.map(
                                (head, headID) => <th key={headID} >{head}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        body.map((rowContent, rowID) =>
                            <TableRow rowContent={rowContent} key={rowID} />
                        )
                    }
                </tbody>
            </table>
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.rowContent;
        return (
            <tr>
                {row.map((val, rowID) => <td key={rowID}>{val}</td>)}
            </tr>
        )
    }
}

export default Table_score;

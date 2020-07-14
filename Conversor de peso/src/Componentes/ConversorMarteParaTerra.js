import React from "react";
import "./Conversor.css";

export default class Conversor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ValPesoEmMarte: "",
      ValPesoNaTerra: 0,
    };
  }

  converterPesoMarteParaTerra = () => {
    this.setState({
      ValPesoNaTerra: ((this.state.ValPesoEmMarte * 9.81) / 3.711).toFixed(2),
      ValPesoEmMarte: "",
    });
  };

  render() {
    return (
      <div className="ConversorDireita">
        <h2>
          {this.props.PesoNaTerra} para {this.props.PesoEmMarte}
        </h2>
        <input
          type="text"
          value={this.state.ValPesoEmMarte}
          onChange={(event) => {
            this.setState({ ValPesoEmMarte: event.target.value });
          }}
        ></input>
        <input
          type="button"
          value="Converter"
          onClick={this.converterPesoMarteParaTerra}
        ></input>
        <h2>{this.state.ValPesoNaTerra}</h2>
      </div>
    );
  }
}

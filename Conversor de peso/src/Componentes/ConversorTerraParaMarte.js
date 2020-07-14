import React from "react";
import "./Conversor.css";

export default class Conversor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ValPesoNaTerra: "",
      ValPesoEmMarte: 0,
    };
  }

  converterPesoTerraParaMarte = () => {
    this.setState({
      ValPesoEmMarte: ((this.state.ValPesoNaTerra / 9.81) * 3.711).toFixed(2),
      ValPesoNaTerra: "",
    });
  };

  render() {
    return (
      <div className="ConversorEsquerda">
        <h2>
          {this.props.PesoNaTerra} para {this.props.PesoEmMarte}
        </h2>
        <input
          type="text"
          value={this.state.ValPesoNaTerra}
          onChange={(event) => {
            this.setState({ ValPesoNaTerra: event.target.value });
          }}
        ></input>
        <input
          type="button"
          value="Converter"
          onClick={this.converterPesoTerraParaMarte}
        ></input>
        <h2>{this.state.ValPesoEmMarte}</h2>
      </div>
    );
  }
}

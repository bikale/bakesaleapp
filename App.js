import React, { PureComponent } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { styles } from "./src/Styles";
import ajax from "./src/ajax";
import DealList from "./src/Components/DealList";

export default class App extends PureComponent {
  state = { deals: [], currentDealId: null };

  async componentDidMount() {
    const deals = await ajax.fetchInitilsDeals();
    this.setState((prevState) => ({ deals }));
  }
  setCurrentDeal = (dealID) => {
    this.setState({ currentDealId: dealID });
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.deals ? (
          <DealList
            deals={this.state.deals}
            onItemPress={this.setCurrentDeal}
          />
        ) : (
          <Text style={styles.header}>Bakesale</Text>
        )}
      </View>
    );
  }
}

/* eslint-disable */

import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import propTypes from "prop-types";
import DealItem from "./DealItem";

export default class DealList extends Component {
  static propTypes = {
    deals: propTypes.array.isRequired,
  };

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({ item }) => <DealItem deal={item} />}
          keyExtractor={(item) => item.key}
        />
      </View>

      //     {this.props.deals.map((deal) => (
      //       <Text key={deal.key}> {deal.title} </Text>
      //     ))}
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#eee",
    flex: 1,
    width: "100%",
    paddingTop: 50,
  },
});

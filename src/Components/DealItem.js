/* eslint-disable*/

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
const DealItem = ({ deal }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: deal.media[0] }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{deal.title}</Text>
        <View style={styles.footer}>
          <Text style={styles.cause}>{deal.cause.name}</Text>
          <Text style={styles.price}>${deal.price}</Text>
        </View>
      </View>
    </View>
  );
};
const propTypes = {
  deal: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
  },
  info: {
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#bbb",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  footer: {
    flexDirection: "row",
  },
  price: {
    flex: 1,
    textAlign: "right",
  },
  cause: {
    flex: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default DealItem;

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard></Dashboard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

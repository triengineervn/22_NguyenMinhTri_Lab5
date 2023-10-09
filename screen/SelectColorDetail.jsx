import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import vs_black from "../assets/vs_black.png";
import vs_silver from "../assets/vs_silver.png";
import vs_red from "../assets/vs_red.png";
import vs_blue from "../assets/vs_blue.png";

const SelectColorDetail = ({ navigation, route }) => {
  const colors = [
    { id: "white", color: "#C5F1FB", asset: vs_silver },
    { id: "red", color: "#F30D0D", asset: vs_red },
    { id: "black", color: "#000000", asset: vs_black },
    { id: "blue", color: "#234896", asset: vs_blue },
  ];

  const [color, setColor] = useState(null);
  const [asset, setAsset] = useState(vs_black);
  const selectedColor = (color) => {
    setColor(color);
  };
  const setSelectedAsset = (asset) => {
    setAsset(asset);
  };
  return (
    <View style={[styles.container, { alignItems: "flex-start" }]}>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
        }}
      >
        <Image source={asset} style={styles.img}></Image>
        <View>
          <Text style={[styles.text, { margin: 10 }]}>
            Điện Thoại Vsmart Joy 3<br />
            Hàng chính hãng
          </Text>
          <Text style={[styles.text, { marginHorizontal: 10 }]}>
            Màu:
            <Text style={{ fontWeight: "bold", textTransform: "uppercase" }}>
              {" "}
              {color}
            </Text>
          </Text>
          <Text style={[styles.text, { marginHorizontal: 10 }]}>
            Cung cấp bởi
            <Text style={{ fontWeight: "bold" }}> Tiki Tradding</Text>
          </Text>
          <Text
            style={[styles.text, { marginHorizontal: 10, fontWeight: "bold" }]}
          >
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#C4C4C4" }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "left",
            margin: 10,
          }}
        >
          Chọn một màu bên dưới:
        </Text>
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={colors}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.rectangle, { backgroundColor: `${item.color}` }]}
                onPress={() => {
                  selectedColor(item.id);
                  setSelectedAsset(item.asset);
                }}
              ></TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <TouchableOpacity
          style={styles.btnApply}
          onPress={() => navigation.navigate("Home", { asset: asset })}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#F9F2F2",
              padding: 12,
              textAlign: "center",
            }}
          >
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectColorDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  img: {
    width: 110,
    height: 130,
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
  },
  rectangle: {
    backgroundColor: "#234896",
    width: 85,
    height: 80,
    shadowRadius: 4,
    margin: 6,
  },
  btnApply: {
    marginTop: 24,
    borderRadius: 10,
    shadowRadius: 4,
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    marginHorizontal: 16,
  },
});

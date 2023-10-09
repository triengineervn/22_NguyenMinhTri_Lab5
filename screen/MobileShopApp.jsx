import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import vs_black from "../assets/vs_black.png";
import star from "../assets/star.png";
import Modal from "react-native-modal";
import { useState } from "react";
import React from "react";
const MobileShopApp = ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  React.useEffect(() => {
    if (route.params?.asset) {
    }
  }, [route.params?.asset]);
  return (
    <View style={styles.container}>
      <Image
        source={route.params?.asset == null ? vs_black : route.params?.asset}
        style={styles.img}
      ></Image>
      <Text style={styles.text}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={styles.row}>
        <View style={{ flexDirection: "row" }}>
          <Image source={star} style={styles.star}></Image>
          <Image source={star} style={styles.star}></Image>
          <Image source={star} style={styles.star}></Image>
          <Image source={star} style={styles.star}></Image>
          <Image source={star} style={styles.star}></Image>
        </View>
        <Text style={[styles.text, { alignSelf: "center" }]}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.text, { fontSize: 18, fontWeight: 700 }]}>
          1.790.000 đ
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 15,
              fontWeight: 700,
              color: "rgba(0, 0, 0, 0.58)",
              textDecorationLine: "line-through",
            },
          ]}
        >
          1.790.000 đ
        </Text>
      </View>
      <View style={[styles.row, { justifyContent: "flex-start" }]}>
        <Text
          style={{
            textAlign: "center",
            color: "#FA0000",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 45,
            height: 20,
            width: 20,
            marginStart: 8,
          }}
        >
          <Text style={(styles.text, { textAlign: "center" })}>?</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.btnSelected, { backgroundColor: "white" }]}
        onPress={() => navigation.navigate("Details")}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center ",
          }}
        >
          <Text style={styles.text}>4 MÀU-CHỌN MÀU</Text>
          <AntDesign name="right" size={15} color="black"></AntDesign>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btnSelected,
          {
            marginTop: 60,
          },
        ]}
        onPress={toggleModal}
      >
        <Text
          style={[
            styles.text,
            {
              textAlign: "center",
              fontSize: 20,
              fontWeight: 700,
              color: "#F9F2F2",
            },
          ]}
        >
          CHỌN MUA
        </Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.popupContainer}>
          <Text style={[styles.text, { fontSize: 18 }]}>
            Đặt hàng thành công
          </Text>
          <TouchableOpacity style={styles.btnSelected} onPress={toggleModal}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                  color: "#fff",
                  textAlign: "center",
                  padding: 10,
                  fontWeight: "bold",
                },
              ]}
            >
              Đóng
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default MobileShopApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  img: {
    marginHorizontal: 30,
    width: 300,
    height: 360,
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
  },
  star: {
    width: 25,
    height: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 13,
    paddingHorizontal: 30,
  },
  btnSelected: {
    borderColor: "#CA1536",
    backgroundColor: "#EE0A0A",
    marginTop: 16,
    width: "90%",
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
  },
  popupContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

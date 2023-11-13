import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../globals/style";
import Swiper from "react-native-swiper";

const OfferSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.offerSlider}>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          showsButtons={true}
          dotColor={colors.text2}
          activeDotColor={colors.text1}
          nextButton={<Text style={styles.buttonText}>˃</Text>}
          prevButton={<Text style={styles.buttonText}>˂</Text>}
        >
          <View style={styles.slide}>
            <Image
              source={require("../../assets/OfferSliderImages/img1.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/OfferSliderImages/img2.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/OfferSliderImages/img3.png")}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  offerSlider: {
    width: "100%",
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  slide: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.col1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 40,
    color: colors.text1,
    fontWeight: "400",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    textAlign: "center",
    lineHeight: 45,
    // backgroundColor:"white",
    elevation: 30,
  },
});

/**
import * as React from "react";
import {Image, StyleSheet, Pressable, View, Text} from "react-native";
import Home1 from "../assets/home-1.svg"
import Setting from "../assets/setting.svg"
import Home11 from "../assets/home-11.svg"
import Setting1 from "../assets/setting1.svg"
import Wateranimation from "../assets/water-animation.svg"

const TemperaturePage = () => {
  	
  	return (
    		<View style={styles.temperaturePage}>
      			<View style={styles.component7}>
        				<Pressable style={styles.group} onPress={()=>{}}>
          					<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="Group.png" />
        				</Pressable>
        				<View style={styles.menuBar}>
          					<View style={styles.menu}>
            						<View style={styles.menuShadowBox} />
            						<View style={styles.homeParent}>
              							<View style={[styles.home, styles.homePosition]}>
                								<Home1 style={[styles.home1Icon, styles.iconPosition]} />
                								<Text style={styles.home1}>Home</Text>
              							</View>
              							<Pressable style={[styles.setting, styles.homePosition]} onPress={()=>{}}>
                								<Setting style={[styles.settingIcon, styles.iconPosition]} />
                								<Text style={[styles.setting1, styles.home3Position]}>Setting</Text>
              							</Pressable>
            						</View>
          					</View>
          					<View style={styles.menu}>
            						<View style={styles.menuShadowBox} />
            						<View style={styles.homeParent}>
              							<Pressable style={[styles.home, styles.homePosition]} onPress={()=>{}}>
                								<Home11 style={[styles.home1Icon, styles.iconPosition]} />
                								<Text style={[styles.home3, styles.home3Position]}>Home</Text>
              							</Pressable>
              							<Pressable style={[styles.setting, styles.homePosition]} onPress={()=>{}}>
                								<Setting1 style={[styles.settingIcon, styles.iconPosition]} />
                								<Text style={[styles.setting1, styles.home3Position]}>Setting</Text>
              							</Pressable>
            						</View>
          					</View>
          					<Image style={styles.blueModernWaterCompanyLogo} resizeMode="cover" source="Blue Modern Water Company Logo Type 1.png" />
        				</View>
        				<Wateranimation style={[styles.waterAnimationIcon, styles.iconLayout]} />
        				<Text style={[styles.todaysWaterTemperature, styles.cFlexBox]}>Today’s water temperature:</Text>
        				<Text style={[styles.c, styles.cFlexBox]}>25°c</Text>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	iconLayout: {
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%"
  	},
  	homePosition: {
    		top: "0%",
    		bottom: "0%",
    		height: "100%",
    		position: "absolute"
  	},
  	iconPosition: {
    		bottom: "44.19%",
    		height: "55.81%",
    		top: "0%",
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%",
    		position: "absolute"
  	},
  	home3Position: {
    		color: "#000",
    		textAlign: "center",
    		lineHeight: 16,
    		letterSpacing: 0,
    		fontSize: 12,
    		top: "62.79%",
    		left: "0%",
    		position: "absolute"
  	},
  	cFlexBox: {
    		textAlign: "left",
    		lineHeight: 24,
    		position: "absolute"
  	},
  	icon: {
    		nodeWidth: "5.33%",
    		nodeHeight: "2.14%",
    		height: "100%",
    		maxHeight: "100%",
    		width: "100%"
  	},
  	group: {
    		left: "9.87%",
    		top: "8.52%",
    		right: "84.8%",
    		bottom: "89.35%",
    		width: "5.33%",
    		height: "2.14%",
    		position: "absolute"
  	},
  	menuShadowBox: {
    		shadowOpacity: 1,
    		elevation: 1,
    		shadowRadius: 1,
    		shadowOffset: {
      			width: 0,
      			height: -1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.1)",
    		top: "0%",
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		height: "100%",
    		position: "absolute",
    		width: "100%",
    		backgroundColor: "#fff"
  	},
  	home1Icon: {
    		width: "67.94%",
    		right: "14.98%",
    		left: "17.08%"
  	},
  	home1: {
    		textAlign: "center",
    		lineHeight: 16,
    		letterSpacing: 0,
    		fontSize: 12,
    		top: "62.79%",
    		color: "#26a3ea",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		left: "0%",
    		position: "absolute"
  	},
  	home: {
    		width: "11.76%",
    		right: "88.24%",
    		left: "0%"
  	},
  	settingIcon: {
    		width: "58.54%",
    		right: "19.51%",
    		left: "21.95%"
  	},
  	setting1: {
    		fontFamily: "Roboto-Regular"
  	},
  	setting: {
    		width: "14.19%",
    		left: "85.81%",
    		right: "0%"
  	},
  	homeParent: {
    		height: "56.58%",
    		width: "77.07%",
    		top: "19.74%",
    		right: "10.4%",
    		bottom: "23.68%",
    		left: "12.53%",
    		position: "absolute"
  	},
  	menu: {
    		height: "43.43%",
    		top: "30.86%",
    		bottom: "25.71%",
    		left: "0%",
    		right: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	home3: {
    		fontFamily: "Roboto-Medium",
    		color: "#000",
    		fontWeight: "500"
  	},
  	blueModernWaterCompanyLogo: {
    		width: "46.67%",
    		right: "26.67%",
    		left: "26.67%",
    		height: 175,
    		overflow: "hidden",
    		maxWidth: "100%",
    		top: 0,
    		position: "absolute"
  	},
  	menuBar: {
    		height: "20.42%",
    		top: "79.58%",
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	waterAnimationIcon: {
    		height: "29.99%",
    		width: "68.53%",
    		top: "27.3%",
    		right: "15.2%",
    		bottom: "42.71%",
    		left: "16.27%",
    		borderRadius: 678,
    		position: "absolute"
  	},
  	todaysWaterTemperature: {
    		top: "14.82%",
    		left: "25.07%",
    		fontSize: 14,
    		letterSpacing: -0.1,
    		fontFamily: "Poppins-Medium",
    		color: "#9fa4a9",
    		lineHeight: 24,
    		fontWeight: "500"
  	},
  	c: {
    		height: "3.97%",
    		width: "38.13%",
    		top: "67.44%",
    		left: "30.93%",
    		fontSize: 64,
    		letterSpacing: -0.6,
    		fontWeight: "600",
    		fontFamily: "Poppins-SemiBold",
    		color: "#26a3ea",
    		lineHeight: 24
  	},
  	component7: {
    		left: 0,
    		width: 375,
    		height: 857,
    		top: 0,
    		position: "absolute"
  	},
  	temperaturePage: {
    		flex: 1,
    		height: 812,
    		width: "100%",
    		backgroundColor: "#fff"
  	}
});

export default TemperaturePage; **/
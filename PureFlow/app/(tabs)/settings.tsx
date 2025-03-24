/**
import * as React from "react";
import {Image, StyleSheet, Pressable, View, Text} from "react-native";
import Home1 from "../assets/home-1.svg"
import Setting from "../assets/setting.svg"
import Home11 from "../assets/home-11.svg"
import Setting1 from "../assets/setting1.svg"
import Useroutline from "../assets/user-outline.svg"
import Mail from "../assets/mail.svg"
import Eye from "../assets/eye.svg"
import Lock from "../assets/lock.svg"

const Component = () => {
  	
  	return (
    		<View style={styles.component5}>
      			<Pressable style={styles.group} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="Group.png" />
      			</Pressable>
      			<View style={styles.menuBar}>
        				<View style={styles.menu}>
          					<View style={styles.menuShadowBox} />
          					<View style={styles.homeParent}>
            						<View style={[styles.home, styles.homePosition]}>
              							<Home1 style={[styles.home1Icon, styles.iconPosition1]} />
              							<Text style={[styles.home1, styles.homeTypo]}>Home</Text>
            						</View>
            						<Pressable style={[styles.setting, styles.homePosition]} onPress={()=>{}}>
              							<Setting style={[styles.settingIcon, styles.iconPosition1]} />
              							<Text style={[styles.setting1, styles.home3Position]}>Setting</Text>
            						</Pressable>
          					</View>
        				</View>
        				<View style={styles.menu}>
          					<View style={styles.menuShadowBox} />
          					<View style={styles.homeParent}>
            						<Pressable style={[styles.home, styles.homePosition]} onPress={()=>{}}>
              							<Home11 style={[styles.home1Icon, styles.iconPosition1]} />
              							<Text style={[styles.home3, styles.home3Position]}>Home</Text>
            						</Pressable>
            						<Pressable style={[styles.setting, styles.homePosition]} onPress={()=>{}}>
              							<Setting1 style={[styles.settingIcon, styles.iconPosition1]} />
              							<Text style={[styles.setting1, styles.home3Position]}>Setting</Text>
            						</Pressable>
          					</View>
        				</View>
        				<Image style={styles.blueModernWaterCompanyLogo} resizeMode="cover" source="Blue Modern Water Company Logo Type 1.png" />
      			</View>
      			<Text style={[styles.iAlreadyHave, styles.logInPosition]}>I Already Have an Account</Text>
      			<Text style={[styles.logIn, styles.textTypo]}>Log in</Text>
      			<View style={[styles.signUp, styles.signUpFlexBox]}>
        				<Text style={styles.next}>Create Account</Text>
      			</View>
      			<View style={styles.forms}>
        				<View style={[styles.fullName, styles.fullNameLayout]}>
          					<Useroutline style={styles.iconLayout} width={24} height={24} />
          					<Text style={[styles.emailAddress, styles.emailAddressTypo]}>Full Name</Text>
        				</View>
        				<View style={[styles.fullName, styles.fullNameLayout]}>
          					<Mail style={styles.iconLayout} width={24} height={24} />
          					<Text style={[styles.emailAddress, styles.emailAddressTypo]}>Email address</Text>
        				</View>
        				<View style={[styles.phoneNumber, styles.fullNameLayout]}>
          					<Image style={[styles.nigeria1Icon, styles.iconPosition]} resizeMode="cover" source="nigeria 1.png" />
          					<Text style={[styles.text, styles.textClr]}>+234</Text>
          					<Text style={[styles.enterNumber, styles.textClr]}>Enter number</Text>
        				</View>
        				<View style={[styles.phoneNumber, styles.fullNameLayout]}>
          					<Text style={[styles.password1, styles.textClr]}>Password</Text>
          					<Eye style={[styles.eyeIcon, styles.iconLayout]} width={24} height={24} />
          					<Lock style={[styles.lockIcon, styles.iconPosition]} width={24} height={24} />
        				</View>
      			</View>
      			<View style={styles.loginDetails}>
        				<Text style={styles.createAnAccount}>Create an account</Text>
        				<Text style={[styles.securelyLoginTo, styles.emailAddressTypo]}>Securely login to your account</Text>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	homePosition: {
    		top: "0%",
    		bottom: "0%",
    		height: "100%",
    		position: "absolute"
  	},
  	iconPosition1: {
    		bottom: "44.19%",
    		height: "55.81%",
    		top: "0%",
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%",
    		position: "absolute"
  	},
  	homeTypo: {
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500"
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
  	logInPosition: {
    		top: "73.31%",
    		textAlign: "center",
    		position: "absolute"
  	},
  	textTypo: {
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 14
  	},
  	signUpFlexBox: {
    		paddingVertical: 13,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	fullNameLayout: {
    		width: 325,
    		backgroundColor: "#f4f4f4",
    		borderRadius: 5,
    		overflow: "hidden"
  	},
  	emailAddressTypo: {
    		color: "#8e8e8e",
    		textAlign: "left",
    		fontFamily: "Poppins-Regular"
  	},
  	iconPosition: {
    		marginTop: -12,
    		top: "50%",
    		height: 24,
    		width: 24,
    		position: "absolute"
  	},
  	textClr: {
    		color: "#b2b2b2",
    		textAlign: "left",
    		position: "absolute"
  	},
  	iconLayout: {
    		overflow: "hidden"
  	},
  	icon: {
    		nodeWidth: "5.33%",
    		nodeHeight: "2.13%",
    		maxHeight: "100%",
    		height: "100%",
    		overflow: "hidden",
    		maxWidth: "100%",
    		width: "100%"
  	},
  	group: {
    		left: "10.13%",
    		top: "8.51%",
    		right: "84.53%",
    		bottom: "89.36%",
    		width: "5.33%",
    		height: "2.13%",
    		position: "absolute"
  	},
  	menuShadowBox: {
    		backgroundColor: "#fff",
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
    		width: "100%"
  	},
  	home1Icon: {
    		width: "67.94%",
    		right: "14.98%",
    		left: "17.08%"
  	},
  	home1: {
    		color: "#26a3ea",
    		textAlign: "center",
    		lineHeight: 16,
    		letterSpacing: 0,
    		top: "62.79%",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		fontSize: 12,
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
    		fontWeight: "500"
  	},
  	blueModernWaterCompanyLogo: {
    		width: "46.67%",
    		top: 0,
    		right: "26.67%",
    		left: "26.67%",
    		height: 175,
    		overflow: "hidden",
    		maxWidth: "100%",
    		position: "absolute"
  	},
  	menuBar: {
    		height: "20.4%",
    		top: "79.6%",
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	iAlreadyHave: {
    		left: "18.93%",
    		color: "#575757",
    		fontFamily: "Poppins-Regular",
    		fontSize: 14
  	},
  	logIn: {
    		left: "69.6%",
    		textDecoration: "underline",
    		color: "#0f80fd",
    		top: "73.31%",
    		textAlign: "center",
    		position: "absolute"
  	},
  	next: {
    		fontSize: 16,
    		color: "#fff",
    		fontFamily: "Poppins-Regular",
    		textAlign: "center"
  	},
  	signUp: {
    		height: "5.83%",
    		top: "63.99%",
    		bottom: "30.19%",
    		shadowColor: "rgba(93, 204, 252, 0.42)",
    		shadowRadius: 20,
    		elevation: 20,
    		backgroundColor: "#62cdfa",
    		justifyContent: "center",
    		paddingHorizontal: 83,
    		borderRadius: 5,
    		paddingVertical: 13,
    		alignItems: "center",
    		flexDirection: "row",
    		left: "6.67%",
    		right: "6.67%",
    		width: "86.67%",
    		shadowOpacity: 1,
    		overflow: "hidden",
    		position: "absolute"
  	},
  	emailAddress: {
    		textAlign: "left",
    		fontSize: 12
  	},
  	fullName: {
    		paddingHorizontal: 20,
    		gap: 10,
    		paddingVertical: 13,
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	nigeria1Icon: {
    		left: 20,
    		top: "50%"
  	},
  	text: {
    		marginTop: -10,
    		left: 54,
    		color: "#b2b2b2",
    		top: "50%",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 14
  	},
  	enterNumber: {
    		marginTop: -8,
    		left: 100,
    		top: "50%",
    		fontFamily: "Poppins-Regular",
    		fontSize: 12
  	},
  	phoneNumber: {
    		height: 50
  	},
  	password1: {
    		top: 17,
    		left: 54,
    		color: "#b2b2b2",
    		fontFamily: "Poppins-Regular",
    		fontSize: 12
  	},
  	eyeIcon: {
    		top: 13,
    		right: 20,
    		position: "absolute"
  	},
  	lockIcon: {
    		right: 281,
    		top: "50%",
    		overflow: "hidden"
  	},
  	forms: {
    		height: "30.3%",
    		top: "30.19%",
    		bottom: "39.51%",
    		gap: 20,
    		left: "6.67%",
    		right: "6.67%",
    		width: "86.67%",
    		position: "absolute"
  	},
  	createAnAccount: {
    		fontSize: 22,
    		fontWeight: "700",
    		fontFamily: "Poppins-Bold",
    		color: "#303030",
    		textAlign: "left"
  	},
  	securelyLoginTo: {
    		textAlign: "left",
    		fontSize: 14
  	},
  	loginDetails: {
    		height: "6.88%",
    		width: "56.8%",
    		top: "18.76%",
    		right: "33.87%",
    		bottom: "74.36%",
    		left: "9.33%",
    		gap: 5,
    		position: "absolute"
  	},
  	component5: {
    		flex: 1,
    		height: 858,
    		width: "100%"
  	}
});

export default Component;
**/
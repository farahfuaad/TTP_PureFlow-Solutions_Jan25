import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable} from "react-native";
import Vector1 from "../../assets/Vector-1.svg";
import Vector2 from "../../assets/Vector-2.svg";

const landing = () => {
  	
  	return (
    		<View style={styles.page}>
      			<View style={styles.vectorParent}>
        				<Vector1 style={[styles.groupChild, styles.groupPosition]} width={599} height={251} />
        				<Vector2 style={[styles.groupItem, styles.groupPosition]} width={526} height={267} />
      			</View>
      			<Image
        				style={styles.bluemodernwatercompanylogotypeIcon}
        				resizeMode="cover"
        				source={require('@/assets/images/BlueModernWaterCompanyLogoType1.png')}
      			/>
    		</View>);
};

const styles = StyleSheet.create({
  	groupPosition: {
    		opacity: 0.4,
    		position: "absolute"
  	},
  	btnnextLayout: {
    		height: 60,
    		width: 318,
    		position: "absolute"
  	},
  	groupChild: {
    		bottom: 16,
    		left: 0
  	},
  	groupItem: {
    		bottom: 0,
    		left: 115
  	},
  	background: {
    		top: 0,
    		borderRadius: 8,
    		backgroundColor: "#fff",
    		left: 0
  	},
  	vectorParent: {
    		bottom: -111,
    		left: -131,
    		width: 640,
    		height: 267,
    		position: "absolute"
  	},
  	// Parent container style
	page: {
		backgroundColor: "#26a3ea",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},

	// logo style
	bluemodernwatercompanylogotypeIcon: {
		width: "70%",
		height: undefined, 
		aspectRatio: 318 / 105, 
	}
});

export default landing;
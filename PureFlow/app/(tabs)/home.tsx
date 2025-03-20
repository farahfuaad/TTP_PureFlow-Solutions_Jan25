import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable} from "react-native";
import Maskgroup from "../assets/mask-group.svg"
import Vector5 from "../assets/vector-5.svg"
import Hiconboldnotification3 from "../assets/hicon--bold--notification-3.svg"
import Ellipse1 from "../assets/ellipse-1.svg"

const Component = () => {
  	
  	return (
    		<View style={styles.component1}>
      			<View style={styles.maskGroupParent}>
        				<Maskgroup style={[styles.maskGroupIcon, styles.iconLayout]} />
        				<View style={styles.groupChild} />
        				<Text style={styles.waterQualityOver}>Water Quality Over Time</Text>
        				<View style={[styles.groupItem, styles.groupChildPosition5]} />
        				<View style={[styles.groupInner, styles.groupPosition]} />
        				<View style={[styles.rectangleView, styles.groupChild5Position]} />
        				<View style={[styles.groupChild1, styles.groupChildPosition3]} />
        				<View style={[styles.groupChild2, styles.groupChildPosition2]} />
        				<View style={[styles.groupChild3, styles.groupChildPosition1]} />
        				<View style={[styles.groupChild4, styles.groupChildPosition1]} />
        				<View style={[styles.groupChild5, styles.groupChildPosition1]} />
        				<View style={[styles.groupChild6, styles.groupChildPosition]} />
        				<View style={[styles.groupChild7, styles.groupChildPosition]} />
        				<View style={[styles.groupChild8, styles.groupChildPosition5]} />
        				<View style={[styles.groupChild9, styles.groupChildPosition4]} />
        				<View style={[styles.groupChild10, styles.groupChildPosition5]} />
        				<Vector5 style={[styles.vectorIcon, styles.iconLayout]} />
      			</View>
      			<Text style={styles.johnDoe}>John Doe</Text>
      			<View style={styles.roundedIcon}>
        				<Hiconboldnotification3 style={[styles.hiconBoldNotification3, styles.hiconLayout]} width={20} height={20} />
        				<Ellipse1 style={styles.roundedIconChild} width={10} height={10} />
      			</View>
      			<Pressable style={[styles.today, styles.todayShadowBox1]} onPress={()=>{}}>
        				<Text style={[styles.turbidity, styles.turbidityTypo]}>Turbidity</Text>
        				<Text style={[styles.ntu, styles.ntuTypo]}>5 NTU</Text>
        				<View style={[styles.hiconBoldEdit2, styles.hiconLayout]} />
      			</Pressable>
      			<Pressable style={[styles.today1, styles.todayShadowBox1]} onPress={()=>{}}>
        				<Text style={[styles.totalDissolvedSolids, styles.turbidityTypo]}>Total Dissolved Solids</Text>
        				<Text style={[styles.ppm, styles.ntuTypo]}>330 ppm</Text>
        				<View style={[styles.hiconBoldEdit2, styles.hiconLayout]} />
      			</Pressable>
      			<Pressable style={[styles.today2, styles.todayShadowBox]} onPress={()=>{}}>
        				<Text style={[styles.turbidity, styles.turbidityTypo]}>PH Level</Text>
        				<Text style={[styles.text, styles.cTypo]}>7.2</Text>
        				<View style={[styles.hiconBoldEdit2, styles.hiconLayout]} />
      			</Pressable>
      			<Pressable style={[styles.today3, styles.todayShadowBox]} onPress={()=>{}}>
        				<Text style={[styles.turbidity, styles.turbidityTypo]}>Temperature</Text>
        				<Text style={[styles.c, styles.cTypo]}>25°c</Text>
        				<View style={[styles.hiconBoldEdit2, styles.hiconLayout]} />
      			</Pressable>
      			<Pressable style={styles.process} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" 
                        source={require('@/assets/images/BlueModernWaterCompanyLogoType1.png')}/>
      			</Pressable>
      			<Text style={[styles.safeToUse, styles.ntuTypo]}>{`Safe to Use `}</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	iconLayout: {
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%"
  	},
  	groupChildPosition5: {
    		opacity: 0.3,
    		backgroundColor: "#8edcfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		top: "25.32%",
    		height: "33.75%",
    		position: "absolute"
  	},
  	groupPosition: {
    		left: "25%",
    		right: "71.17%",
    		width: "3.83%"
  	},
  	groupChild5Position: {
    		left: "34.62%",
    		right: "62.19%",
    		bottom: "40.94%",
    		width: "3.19%"
  	},
  	groupChildPosition3: {
    		left: "42.95%",
    		right: "53.22%"
  	},
  	groupChildPosition2: {
    		left: "52.56%",
    		right: "43.6%"
  	},
  	groupChildPosition1: {
    		backgroundColor: "#5dccfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		position: "absolute"
  	},
  	groupChildPosition: {
    		bottom: "40.92%",
    		backgroundColor: "#5dccfc",
    		width: "3.83%",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		position: "absolute"
  	},
  	groupChildPosition4: {
    		width: "3.83%",
    		opacity: 0.3,
    		backgroundColor: "#8edcfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		bottom: "40.94%",
    		top: "25.32%",
    		height: "33.75%",
    		position: "absolute"
  	},
  	hiconLayout: {
    		height: 20,
    		width: 20,
    		overflow: "hidden"
  	},
  	todayShadowBox1: {
    		borderRadius: 16,
    		bottom: "40.76%",
    		top: "49.37%",
    		width: "39.2%",
    		height: "9.87%",
    		backgroundColor: "#fff",
    		overflow: "hidden",
    		shadowOpacity: 1,
    		elevation: 15,
    		shadowRadius: 15,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.12)",
    		position: "absolute"
  	},
  	turbidityTypo: {
    		lineHeight: 20,
    		letterSpacing: -0.1,
    		fontSize: 12,
    		textAlign: "left",
    		color: "#90a5b4",
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	ntuTypo: {
    		lineHeight: 24,
    		letterSpacing: -0.2,
    		color: "#141a1e",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 20,
    		textAlign: "left",
    		position: "absolute"
  	},
  	todayShadowBox: {
    		bottom: "52.91%",
    		top: "37.22%",
    		borderRadius: 16,
    		width: "39.2%",
    		height: "9.87%",
    		backgroundColor: "#fff",
    		overflow: "hidden",
    		shadowOpacity: 1,
    		elevation: 15,
    		shadowRadius: 15,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.12)",
    		position: "absolute"
  	},
  	cTypo: {
    		bottom: 18,
    		lineHeight: 24,
    		letterSpacing: -0.2,
    		color: "#141a1e",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 20,
    		textAlign: "left",
    		position: "absolute"
  	},
  	maskGroupIcon: {
    		width: "98.72%",
    		right: "0.64%",
    		bottom: "0.43%",
    		left: "0.64%",
    		top: "0%",
    		overflow: "hidden",
    		maxWidth: "100%",
    		height: "99.57%",
    		position: "absolute"
  	},
  	groupChild: {
    		top: "0.42%",
    		right: "0%",
    		bottom: "0.01%",
    		left: "0%",
    		borderRadius: 18,
    		borderStyle: "solid",
    		borderColor: "#d0d0d0",
    		borderWidth: 0.5,
    		height: "99.57%",
    		position: "absolute",
    		width: "100%"
  	},
  	waterQualityOver: {
    		height: "6.2%",
    		width: "75.4%",
    		top: "8.81%",
    		left: "4.79%",
    		fontSize: 13,
    		lineHeight: 13,
    		display: "flex",
    		alignItems: "center",
    		textAlign: "left",
    		color: "#90a5b4",
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	groupItem: {
    		left: "16.03%",
    		right: "80.78%",
    		width: "3.19%",
    		bottom: "40.94%",
    		backgroundColor: "#8edcfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		top: "25.32%",
    		height: "33.75%"
  	},
  	groupInner: {
    		opacity: 0.3,
    		backgroundColor: "#8edcfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		top: "25.32%",
    		height: "33.75%",
    		position: "absolute",
    		bottom: "40.94%"
  	},
  	rectangleView: {
    		opacity: 0.3,
    		backgroundColor: "#8edcfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		top: "25.32%",
    		height: "33.75%",
    		position: "absolute",
    		right: "62.19%"
  	},
  	groupChild1: {
    		width: "3.83%",
    		opacity: 0.3,
    		backgroundColor: "#8edcfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		bottom: "40.94%",
    		top: "25.32%",
    		height: "33.75%",
    		position: "absolute"
  	},
  	groupChild2: {
    		width: "3.83%",
    		opacity: 0.3,
    		backgroundColor: "#8edcfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		bottom: "40.94%",
    		top: "25.32%",
    		height: "33.75%",
    		position: "absolute"
  	},
  	groupChild3: {
    		height: "32.94%",
    		top: "26.16%",
    		bottom: "40.9%",
    		left: "16.03%",
    		right: "80.78%",
    		width: "3.19%"
  	},
  	groupChild4: {
    		height: "24.88%",
    		top: "34.18%",
    		bottom: "40.95%",
    		left: "25%",
    		right: "71.17%",
    		width: "3.83%"
  	},
  	groupChild5: {
    		height: "16.44%",
    		top: "42.62%",
    		left: "34.62%",
    		right: "62.19%",
    		bottom: "40.94%",
    		width: "3.19%"
  	},
  	groupChild6: {
    		height: "21.53%",
    		top: "37.55%",
    		left: "42.95%",
    		right: "53.22%"
  	},
  	groupChild7: {
    		height: "15.2%",
    		top: "43.88%",
    		left: "52.56%",
    		right: "43.6%"
  	},
  	groupChild8: {
    		right: "35.27%",
    		left: "61.54%",
    		bottom: "40.94%",
    		backgroundColor: "#8edcfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		top: "25.32%",
    		height: "33.75%",
    		width: "3.19%"
  	},
  	groupChild9: {
    		right: "25.65%",
    		left: "70.51%"
  	},
  	groupChild10: {
    		right: "16.68%",
    		left: "80.13%",
    		bottom: "40.94%",
    		backgroundColor: "#8edcfc",
    		borderTopRightRadius: 8,
    		borderTopLeftRadius: 8,
    		top: "25.32%",
    		height: "33.75%",
    		width: "3.19%"
  	},
  	vectorIcon: {
    		height: "0.62%",
    		width: "79.49%",
    		top: "59.07%",
    		right: "12.18%",
    		bottom: "40.31%",
    		left: "8.33%",
    		position: "absolute"
  	},
  	maskGroupParent: {
    		height: "20.41%",
    		width: "83.47%",
    		top: "61.62%",
    		bottom: "17.98%",
    		shadowOpacity: 1,
    		elevation: 15,
    		shadowRadius: 15,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.12)",
    		left: "8.53%",
    		right: "8%",
    		position: "absolute"
  	},
  	johnDoe: {
    		top: "1.01%",
    		lineHeight: 32,
    		color: "#141a1e",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 20,
    		textAlign: "left",
    		left: "8.53%",
    		position: "absolute"
  	},
  	hiconBoldNotification3: {
    		zIndex: 0
  	},
  	roundedIconChild: {
    		top: 0,
    		zIndex: 1,
    		left: 29,
    		position: "absolute"
  	},
  	roundedIcon: {
    		height: "5.06%",
    		width: "10.67%",
    		right: "8.53%",
    		bottom: "94.94%",
    		left: "80.8%",
    		shadowColor: "rgba(0, 0, 0, 0.13)",
    		borderRadius: 70,
    		flexDirection: "row",
    		justifyContent: "center",
    		padding: 10,
    		gap: 10,
    		backgroundColor: "#fff",
    		alignItems: "center",
    		top: "0%",
    		shadowOpacity: 1,
    		elevation: 15,
    		shadowRadius: 15,
    		position: "absolute"
  	},
  	turbidity: {
    		top: 10,
    		left: 15
  	},
  	ntu: {
    		left: 45,
    		bottom: 15,
    		lineHeight: 24,
    		letterSpacing: -0.2
  	},
  	hiconBoldEdit2: {
    		right: 8,
    		bottom: 13,
    		position: "absolute"
  	},
  	today: {
    		right: "52.27%",
    		left: "8.53%",
    		borderRadius: 16,
    		bottom: "40.76%",
    		top: "49.37%",
    		width: "39.2%",
    		height: "9.87%"
  	},
  	totalDissolvedSolids: {
    		top: 8,
    		left: 10
  	},
  	ppm: {
    		bottom: 15,
    		lineHeight: 24,
    		letterSpacing: -0.2,
    		left: 29
  	},
  	today1: {
    		right: "8.27%",
    		left: "52.53%"
  	},
  	text: {
    		left: 60
  	},
  	today2: {
    		right: "52%",
    		left: "8.8%"
  	},
  	c: {
    		left: 51
  	},
  	today3: {
    		left: "52.8%",
    		right: "8%",
    		bottom: "52.91%",
    		top: "37.22%"
  	},
    icon: {
            borderRadius: 171,
            height: "100%",
            width: "100%",
  	},
  	process: {
    		left: "30.93%",
    		top: "9.62%",
    		right: "30.4%",
    		bottom: "72.03%",
    		width: "38.67%",
    		height: "18.35%",
    		position: "absolute"
  	},
  	safeToUse: {
    		top: "31.01%",
    		left: "35.2%"
  	},
  	component1: {
    		flex: 1,
    		height: 790,
    		width: "100%"
  	}
});

export default Component;
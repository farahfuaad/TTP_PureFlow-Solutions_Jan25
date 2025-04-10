import * as React from "react";
import {Image, StyleSheet, Pressable, View, Text} from "react-native";
import Home1 from "../../assets/home 1.svg"
import Setting from "../../assets/settings.svg"
import Group2 from "../../assets/Group 2.svg"

const PHLevelPage = () => {
  	
  	return (
    		<View style={[styles.phLevelPage, styles.baseBg]}>
      			<View style={styles.component3}>
        				<Pressable style={styles.group} onPress={()=>{}}>
          					<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="Group.png" />
        				</Pressable>
        				<View style={styles.menuBar}>
          					<View style={styles.menu}>
            						<View style={styles.menuShadowBox} />
            						<View style={styles.homeParent}>
              							<View style={[styles.home, styles.c25Position]}>
                								<Home1 style={[styles.home1Icon, styles.iconPosition]} />
                								<Text style={[styles.home1, styles.homeTypo]}>Home</Text>
              							</View>
              							<Pressable style={[styles.setting, styles.c25Position]} onPress={()=>{}}>
                								<Setting style={[styles.settingIcon, styles.iconPosition]} />
                								<Text style={[styles.setting1, styles.home3Position]}>Setting</Text>
              							</Pressable>
            						</View>
          					</View>
          					<Image style={styles.blueModernWaterCompanyLogo} resizeMode="cover" source="Blue Modern Water Company Logo Type 1.png" />
        				</View>
        				<Group2 style={[styles.component3Child, styles.iconLayout]} />
        				<Text style={[styles.text, styles.textLayout]}>7.2</Text>
        				<Text style={[styles.todaysWaterPh, styles.textLayout]}>Today’s water pH Level:</Text>
        				<View style={[styles.columnChartSmallWidget1, styles.baseShadowBox]}>
          					<View style={[styles.base, styles.baseShadowBox]} />
          					<View style={styles.columnSet}>
            						<View style={[styles.c1, styles.c1Layout]} />
            						<View style={[styles.c10, styles.c10Position]} />
            						<View style={[styles.c19, styles.c19Position]} />
            						<View style={[styles.c2, styles.c2Position]} />
            						<View style={[styles.c11, styles.c19Position]} />
            						<View style={[styles.c20, styles.c1Layout]} />
            						<View style={[styles.c3, styles.c1Layout]} />
            						<View style={[styles.c12, styles.c12Position]} />
            						<View style={[styles.c21, styles.c6Position]} />
            						<View style={[styles.c4, styles.c4Position]} />
            						<View style={[styles.c13, styles.c9Position]} />
            						<View style={styles.c22} />
            						<View style={[styles.c5, styles.c5Position]} />
            						<View style={[styles.c14, styles.c1Layout]} />
            						<View style={[styles.c23, styles.c5Position]} />
            						<View style={[styles.c6, styles.c6Position]} />
            						<View style={[styles.c15, styles.c12Position]} />
            						<View style={[styles.c24, styles.c6Position]} />
            						<View style={[styles.c7, styles.c4Position]} />
            						<View style={[styles.c16, styles.c9Position]} />
            						<View style={[styles.c25, styles.c1Layout]} />
            						<View style={[styles.c8, styles.c1Layout]} />
            						<View style={[styles.c17, styles.c2Position]} />
            						<View style={[styles.c26, styles.c6Position]} />
            						<View style={[styles.c9, styles.c9Position]} />
            						<View style={[styles.c18, styles.c12Position]} />
            						<View style={[styles.c27, styles.c10Position]} />
          					</View>
          					<Text style={[styles.phHistory, styles.phHistoryFlexBox]}>pH History</Text>
          					<Text style={[styles.february2026, styles.phHistoryFlexBox]}>February - 2026</Text>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	baseBg: {
    		backgroundColor: "#fff",
    		width: "100%"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%"
  	},
  	c25Position: {
    		top: "0%",
    		bottom: "0%",
    		height: "100%"
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
  	textLayout: {
    		lineHeight: 24,
    		position: "absolute"
  	},
  	baseShadowBox: {
    		elevation: 15,
    		shadowRadius: 15,
    		shadowOpacity: 1,
    		position: "absolute"
  	},
  	c1Layout: {
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		borderRadius: 50,
    		width: "1.41%",
    		position: "absolute"
  	},
  	c10Position: {
    		bottom: "0.01%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		borderRadius: 50,
    		width: "1.41%",
    		position: "absolute"
  	},
  	c19Position: {
    		top: "40.86%",
    		height: "59.14%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		borderRadius: 50,
    		width: "1.41%",
    		bottom: "0%",
    		position: "absolute"
  	},
  	c2Position: {
    		bottom: "-0.05%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		borderRadius: 50,
    		width: "1.41%",
    		position: "absolute"
  	},
  	c12Position: {
    		bottom: "-0.04%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		borderRadius: 50,
    		width: "1.41%",
    		position: "absolute"
  	},
  	c6Position: {
    		bottom: "0.03%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		borderRadius: 50,
    		width: "1.41%",
    		position: "absolute"
  	},
  	c4Position: {
    		top: "1.22%",
    		height: "98.84%",
    		bottom: "-0.05%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		borderRadius: 50,
    		width: "1.41%",
    		position: "absolute"
  	},
  	c9Position: {
    		bottom: "-0.02%",
    		top: "27.44%",
    		height: "72.58%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		borderRadius: 50,
    		width: "1.41%",
    		position: "absolute"
  	},
  	c5Position: {
    		top: "54.28%",
    		height: "45.7%",
    		bottom: "0.03%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		borderRadius: 50,
    		width: "1.41%",
    		position: "absolute"
  	},
  	phHistoryFlexBox: {
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "Lato-Bold",
    		fontWeight: "700",
    		width: "76.19%",
    		height: "11.72%",
    		textAlign: "center",
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
    		left: "10.13%",
    		top: "8.65%",
    		right: "84.53%",
    		bottom: "89.2%",
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
    		color: "#26a3ea",
    		textAlign: "center",
    		lineHeight: 16,
    		letterSpacing: 0,
    		fontSize: 12,
    		top: "62.79%",
    		fontFamily: "Roboto-Medium",
    		left: "0%",
    		position: "absolute"
  	},
  	home: {
    		width: "11.76%",
    		right: "88.24%",
    		left: "0%",
    		position: "absolute"
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
    		right: "0%",
    		position: "absolute"
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
    		right: "26.67%",
    		left: "26.67%",
    		height: 175,
    		overflow: "hidden",
    		maxWidth: "100%",
    		top: 0,
    		position: "absolute"
  	},
  	menuBar: {
    		height: "20.47%",
    		top: "79.53%",
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	component3Child: {
    		height: "19.18%",
    		width: "48.53%",
    		top: "25.26%",
    		right: "28.8%",
    		bottom: "55.56%",
    		left: "22.67%",
    		position: "absolute"
  	},
  	text: {
    		height: "3.39%",
    		width: "31.73%",
    		top: "34.85%",
    		left: "30.93%",
    		fontSize: 48,
    		letterSpacing: -0.5,
    		fontWeight: "600",
    		fontFamily: "Poppins-SemiBold",
    		color: "#ccdb68",
    		textAlign: "center"
  	},
  	todaysWaterPh: {
    		top: "15.09%",
    		left: "25.33%",
    		fontSize: 14,
    		letterSpacing: -0.1,
    		fontFamily: "Poppins-Medium",
    		color: "#9fa4a9",
    		textAlign: "left",
    		fontWeight: "500",
    		lineHeight: 24
  	},
  	base: {
    		shadowColor: "rgba(0, 0, 0, 0.05)",
    		borderRadius: 16,
    		top: "0%",
    		bottom: "0%",
    		height: "100%",
    		left: "0%",
    		right: "0%",
    		width: "100%",
    		backgroundColor: "#fff"
  	},
  	c1: {
    		height: "58.51%",
    		top: "41.47%",
    		right: "98.59%",
    		bottom: "0.02%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)",
    		left: "0%"
  	},
  	c10: {
    		height: "43.28%",
    		top: "56.72%",
    		right: "64.47%",
    		left: "34.12%"
  	},
  	c19: {
    		right: "30.35%",
    		left: "68.24%"
  	},
  	c2: {
    		height: "79.93%",
    		top: "20.12%",
    		right: "94.8%",
    		left: "3.79%"
  	},
  	c11: {
    		right: "60.68%",
    		left: "37.91%"
  	},
  	c20: {
    		height: "80.47%",
    		top: "19.51%",
    		right: "26.55%",
    		left: "72.03%",
    		bottom: "0.02%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)"
  	},
  	c3: {
    		height: "69.53%",
    		top: "30.49%",
    		right: "91.01%",
    		bottom: "-0.03%",
    		left: "7.58%"
  	},
  	c12: {
    		right: "56.88%",
    		left: "41.7%",
    		top: "48.79%",
    		height: "51.25%",
    		bottom: "-0.04%"
  	},
  	c21: {
    		right: "22.76%",
    		left: "75.83%",
    		top: "29.27%",
    		height: "70.7%",
    		bottom: "0.03%"
  	},
  	c4: {
    		right: "87.22%",
    		left: "11.37%"
  	},
  	c13: {
    		right: "53.09%",
    		left: "45.5%"
  	},
  	c22: {
    		right: "18.97%",
    		left: "79.62%",
    		backgroundColor: "#26a3ea",
    		borderRadius: 50,
    		width: "1.41%",
    		top: "0%",
    		bottom: "0%",
    		height: "100%",
    		position: "absolute"
  	},
  	c5: {
    		right: "83.42%",
    		left: "15.17%"
  	},
  	c14: {
    		height: "33.51%",
    		top: "66.47%",
    		right: "49.3%",
    		left: "49.29%",
    		bottom: "0.02%",
    		backgroundColor: "rgba(54, 159, 255, 0.24)"
  	},
  	c23: {
    		right: "15.18%",
    		left: "83.41%"
  	},
  	c6: {
    		right: "79.63%",
    		left: "18.96%",
    		top: "29.27%",
    		height: "70.7%",
    		bottom: "0.03%"
  	},
  	c15: {
    		right: "45.51%",
    		left: "53.08%",
    		top: "48.79%",
    		height: "51.25%",
    		bottom: "-0.04%"
  	},
  	c24: {
    		right: "11.39%",
    		left: "87.2%",
    		top: "29.27%",
    		height: "70.7%",
    		bottom: "0.03%"
  	},
  	c7: {
    		right: "75.84%",
    		left: "22.75%"
  	},
  	c16: {
    		right: "41.72%",
    		left: "56.87%"
  	},
  	c25: {
    		right: "7.6%",
    		left: "90.99%",
    		top: "0%",
    		bottom: "0%",
    		height: "100%"
  	},
  	c8: {
    		height: "46.95%",
    		top: "53.06%",
    		right: "72.05%",
    		bottom: "-0.01%",
    		left: "26.54%"
  	},
  	c17: {
    		height: "36.02%",
    		top: "64.03%",
    		right: "37.93%",
    		left: "60.66%"
  	},
  	c26: {
    		height: "48.75%",
    		top: "51.23%",
    		right: "3.81%",
    		left: "94.78%"
  	},
  	c9: {
    		right: "68.26%",
    		left: "30.33%"
  	},
  	c18: {
    		height: "54.3%",
    		top: "45.74%",
    		right: "34.14%",
    		left: "64.45%"
  	},
  	c27: {
    		height: "74.37%",
    		top: "25.61%",
    		right: "0.02%",
    		left: "98.57%"
  	},
  	columnSet: {
    		height: "51.88%",
    		width: "82.43%",
    		top: "26.26%",
    		right: "8.98%",
    		bottom: "21.86%",
    		left: "8.59%",
    		position: "absolute"
  	},
  	phHistory: {
    		top: "7.59%",
    		left: "9.38%",
    		fontSize: 18,
    		color: "rgba(22, 26, 65, 0.78)"
  	},
  	february2026: {
    		top: "81%",
    		left: "12.11%",
    		fontSize: 16,
    		color: "rgba(22, 26, 65, 0.49)"
  	},
  	columnChartSmallWidget1: {
    		height: "25.16%",
    		width: "87.12%",
    		top: "53.29%",
    		right: "6.21%",
    		bottom: "21.55%",
    		left: "6.67%",
    		shadowColor: "rgba(0, 0, 0, 0.12)"
  	},
  	component3: {
    		left: 0,
    		width: 375,
    		height: 855,
    		top: 0,
    		position: "absolute"
  	},
  	phLevelPage: {
    		flex: 1,
    		height: 812,
    		width: "100%"
  	}
});

export default PHLevelPage;
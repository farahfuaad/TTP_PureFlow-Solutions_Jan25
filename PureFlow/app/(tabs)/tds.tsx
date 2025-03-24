/**
import * as React from "react";
import {Image, StyleSheet, Pressable, View, Text} from "react-native";
import Home1 from "../assets/home-1.svg"
import Setting from "../assets/setting.svg"
import Home11 from "../assets/home-11.svg"
import Setting1 from "../assets/setting1.svg"
import Down from "../assets/down.svg"
import Gridlines from "../assets/grid-lines.svg"
import Series3graph from "../assets/series-3-graph.svg"
import Series2 from "../assets/series-2.svg"
import Series1graph from "../assets/series-1-graph.svg"

const Component = () => {
  	
  	return (
    		<View style={styles.component4}>
      			<Pressable style={styles.group} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="Group.png" />
      			</Pressable>
      			<View style={[styles.menuBar, styles.boxPosition]}>
        				<View style={styles.menu}>
          					<View style={[styles.menuChild, styles.menuPosition]} />
          					<View style={styles.homeParent}>
            						<View style={[styles.home, styles.boxPosition]}>
              							<Home1 style={[styles.home1Icon, styles.iconPosition]} />
              							<Text style={styles.home1}>Home</Text>
            						</View>
            						<Pressable style={[styles.setting, styles.boxPosition]} onPress={()=>{}}>
              							<Setting style={[styles.settingIcon, styles.iconPosition]} />
              							<Text style={[styles.setting1, styles.home3Position]}>Setting</Text>
            						</Pressable>
          					</View>
        				</View>
        				<View style={styles.menu}>
          					<View style={[styles.menuItem, styles.menuPosition]} />
          					<View style={styles.homeParent}>
            						<Pressable style={[styles.home, styles.boxPosition]} onPress={()=>{}}>
              							<Home11 style={[styles.home1Icon, styles.iconPosition]} />
              							<Text style={[styles.home3, styles.home3Position]}>Home</Text>
            						</Pressable>
            						<Pressable style={[styles.setting, styles.boxPosition]} onPress={()=>{}}>
              							<Setting1 style={[styles.settingIcon, styles.iconPosition]} />
              							<Text style={[styles.setting1, styles.home3Position]}>Setting</Text>
            						</Pressable>
          					</View>
        				</View>
        				<Image style={styles.blueModernWaterCompanyLogo} resizeMode="cover" source="Blue Modern Water Company Logo Type 1.png" />
      			</View>
      			<Text style={styles.ppm}>330 ppm</Text>
      			<Text style={[styles.todaysTdsReadings, styles.tdsTypo]}>Today’s TDS Readings:</Text>
      			<Text style={[styles.tdsReadingsFor, styles.tdsTypo]}> TDS Readings for the next 5 days:</Text>
      			<View style={styles.lineChart}>
        				<View style={[styles.base, styles.menuPosition]} />
        				<View style={styles.filter}>
          					<View style={[styles.dropDownBox, styles.boxPosition]}>
            						<View style={[styles.textBox, styles.boxPosition]}>
              							<View style={[styles.line, styles.linePosition]} />
              							<Text style={[styles.taskTitle, styles.taskTitleFlexBox]}>This week</Text>
            						</View>
          					</View>
          					<Text style={[styles.itemApprovalsIn, styles.augTypo]}>Item approvals in</Text>
          					<Down style={[styles.downIcon, styles.iconLayout]} />
        				</View>
        				<View style={styles.xAxisLabels}>
          					<Text style={[styles.text, styles.textTypo]}>90</Text>
          					<Text style={[styles.text1, styles.textTypo]}>50</Text>
          					<Text style={[styles.text2, styles.textTypo]}>70</Text>
          					<Text style={[styles.text3, styles.textTypo]}>30</Text>
          					<Text style={[styles.text4, styles.textTypo]}>10</Text>
          					<Text style={[styles.text5, styles.textTypo]}>80</Text>
          					<Text style={[styles.text6, styles.textTypo]}>40</Text>
          					<Text style={[styles.text7, styles.textTypo]}>60</Text>
          					<Text style={[styles.text8, styles.textTypo]}>20</Text>
          					<Text style={[styles.text9, styles.textTypo]}>00</Text>
        				</View>
        				<View style={styles.legend}>
          					<View style={[styles.series1, styles.seriesPosition]}>
            						<Text style={[styles.seriesOneHere, styles.seriesTypo]}>Series one here</Text>
            						<View style={[styles.s1Block, styles.blockPosition]} />
          					</View>
          					<View style={[styles.series3, styles.seriesPosition1]}>
            						<Text style={[styles.seriesOneHere, styles.seriesTypo]}>Series one here</Text>
            						<View style={[styles.s3Block, styles.blockPosition]} />
          					</View>
          					<View style={[styles.series2, styles.seriesPosition]}>
            						<Text style={[styles.seriesTwoHere, styles.seriesTypo]}>Series two here</Text>
            						<View style={[styles.s2Block, styles.blockPosition]} />
          					</View>
        				</View>
        				<Gridlines style={[styles.gridLinesIcon, styles.xAxisPosition]} />
        				<View style={[styles.xAxis, styles.xAxisPosition]}>
          					<Text style={[styles.jan, styles.janFlexBox]}>Jan</Text>
          					<Text style={[styles.may, styles.janFlexBox]}>May</Text>
          					<Text style={[styles.sep, styles.janFlexBox]}>Sep</Text>
          					<Text style={[styles.mar, styles.janFlexBox]}>Mar</Text>
          					<Text style={[styles.jul, styles.janFlexBox]}>Jul</Text>
          					<Text style={[styles.nov, styles.janFlexBox]}>Nov</Text>
          					<Text style={[styles.feb, styles.janFlexBox]}>Feb</Text>
          					<Text style={[styles.jun, styles.janFlexBox]}>Jun</Text>
          					<Text style={[styles.oct, styles.janFlexBox]}>Oct</Text>
          					<Text style={[styles.apr, styles.janFlexBox]}>Apr</Text>
          					<Text style={[styles.aug, styles.janFlexBox]}>Aug</Text>
          					<Text style={[styles.dec, styles.janFlexBox]}>Dec</Text>
          					<View style={[styles.axisLine, styles.linePosition]} />
        				</View>
        				<Series3graph style={styles.series3Graph} />
        				<Series2 style={[styles.series2Icon, styles.series2IconPosition]} />
        				<Series1graph style={[styles.series1Graph, styles.series2IconPosition]} />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	iconLayout: {
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%"
  	},
  	boxPosition: {
    		bottom: "0%",
    		position: "absolute"
  	},
  	menuPosition: {
    		backgroundColor: "#fff",
    		shadowOpacity: 1,
    		top: "0%",
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		height: "100%",
    		position: "absolute",
    		width: "100%"
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
  	tdsTypo: {
    		textAlign: "left",
    		color: "#9fa4a9",
    		fontFamily: "Poppins-Medium",
    		letterSpacing: -0.1,
    		fontSize: 14,
    		lineHeight: 24,
    		fontWeight: "500",
    		position: "absolute"
  	},
  	linePosition: {
    		borderTopWidth: 1,
    		borderStyle: "solid",
    		position: "absolute"
  	},
  	taskTitleFlexBox: {
    		alignItems: "center",
    		display: "flex",
    		fontSize: 7,
    		height: "54.14%",
    		textAlign: "left",
    		position: "absolute"
  	},
  	augTypo: {
    		fontFamily: "Lato-Bold",
    		fontWeight: "700"
  	},
  	textTypo: {
    		textAlign: "right",
    		fontSize: 10,
    		height: "6.96%",
    		color: "rgba(128, 128, 128, 0.69)",
    		alignItems: "center",
    		display: "flex",
    		fontFamily: "Lato-Regular",
    		left: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	seriesPosition: {
    		bottom: "44.62%",
    		height: "55.38%",
    		top: "0%",
    		position: "absolute"
  	},
  	seriesTypo: {
    		color: "rgba(22, 26, 65, 0.46)",
    		fontFamily: "Lato-Bold",
    		fontWeight: "700",
    		alignItems: "center",
    		display: "flex",
    		fontSize: 7,
    		textAlign: "left",
    		top: "0%",
    		height: "100%",
    		position: "absolute"
  	},
  	blockPosition: {
    		borderRadius: 5,
    		bottom: "43.03%",
    		top: "50.17%",
    		height: "6.8%",
    		left: "0%",
    		position: "absolute"
  	},
  	seriesPosition1: {
    		right: "52.98%",
    		width: "47.02%",
    		left: "0%"
  	},
  	xAxisPosition: {
    		left: "11.88%",
    		position: "absolute"
  	},
  	janFlexBox: {
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		position: "absolute"
  	},
  	series2IconPosition: {
    		right: "7.02%",
    		width: "78.07%",
    		left: "14.91%",
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%",
    		position: "absolute"
  	},
  	icon: {
    		nodeWidth: "5.33%",
    		nodeHeight: "2.14%",
    		height: "100%",
    		width: "100%"
  	},
  	group: {
    		left: "10.13%",
    		top: "8.52%",
    		right: "84.53%",
    		bottom: "89.35%",
    		width: "5.33%",
    		height: "2.14%",
    		position: "absolute"
  	},
  	menuChild: {
    		elevation: 1,
    		shadowRadius: 1,
    		shadowOffset: {
      			width: 0,
      			height: -1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.1)",
    		shadowOpacity: 1
  	},
  	home1Icon: {
    		width: "67.94%",
    		right: "14.98%",
    		left: "17.08%"
  	},
  	home1: {
    		textAlign: "center",
    		color: "#26a3ea",
    		lineHeight: 16,
    		letterSpacing: 0,
    		fontSize: 12,
    		top: "62.79%",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		left: "0%",
    		position: "absolute"
  	},
  	home: {
    		width: "11.76%",
    		right: "88.24%",
    		top: "0%",
    		left: "0%",
    		height: "100%"
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
    		top: "0%",
    		right: "0%",
    		height: "100%"
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
  	menuItem: {
    		elevation: 1,
    		shadowRadius: 1,
    		shadowOffset: {
      			width: 0,
      			height: -1
    		},
    		shadowColor: "rgba(0, 0, 0, 0.1)",
    		shadowOpacity: 1
  	},
  	home3: {
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		color: "#000"
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
    		height: "20.42%",
    		top: "79.58%",
    		left: "0%",
    		right: "0%",
    		width: "100%"
  	},
  	ppm: {
    		height: "3.97%",
    		width: "66.13%",
    		top: "31.39%",
    		left: "17.87%",
    		fontSize: 48,
    		letterSpacing: -0.5,
    		fontWeight: "600",
    		fontFamily: "Poppins-SemiBold",
    		lineHeight: 24,
    		textAlign: "center",
    		color: "#26a3ea",
    		position: "absolute"
  	},
  	todaysTdsReadings: {
    		top: "26.84%",
    		left: "29.33%"
  	},
  	tdsReadingsFor: {
    		top: "43.76%",
    		left: "20.27%"
  	},
  	base: {
    		shadowColor: "rgba(0, 0, 0, 0.12)",
    		shadowRadius: 15,
    		elevation: 15,
    		borderRadius: 15
  	},
  	line: {
    		height: "7.52%",
    		width: "101.48%",
    		top: "95.92%",
    		right: "-0.74%",
    		bottom: "-3.44%",
    		left: "-0.74%",
    		borderColor: "rgba(0, 0, 0, 0.11)"
  	},
  	taskTitle: {
    		width: "50.59%",
    		left: "0.6%",
    		color: "rgba(0, 0, 0, 0.44)",
    		fontFamily: "Lato-Regular",
    		alignItems: "center",
    		display: "flex",
    		fontSize: 7,
    		height: "54.14%",
    		top: "0%"
  	},
  	textBox: {
    		top: "0%",
    		left: "0%",
    		right: "0%",
    		height: "100%",
    		width: "100%"
  	},
  	dropDownBox: {
    		width: "50.45%",
    		right: "0.9%",
    		left: "48.66%",
    		top: "0%",
    		height: "100%"
  	},
  	itemApprovalsIn: {
    		width: "47.46%",
    		top: "5.18%",
    		color: "#808080",
    		alignItems: "center",
    		display: "flex",
    		fontSize: 7,
    		height: "54.14%",
    		textAlign: "left",
    		position: "absolute",
    		fontWeight: "700",
    		left: "0%"
  	},
  	downIcon: {
    		height: "62.41%",
    		width: "7.11%",
    		top: "10.36%",
    		right: "0.03%",
    		bottom: "27.23%",
    		left: "92.86%",
    		position: "absolute"
  	},
  	filter: {
    		height: "7.88%",
    		width: "40.86%",
    		top: "7.55%",
    		right: "53.2%",
    		bottom: "84.57%",
    		left: "5.94%",
    		position: "absolute"
  	},
  	text: {
    		top: "0%"
  	},
  	text1: {
    		top: "41.32%"
  	},
  	text2: {
    		top: "20.66%"
  	},
  	text3: {
    		top: "61.97%"
  	},
  	text4: {
    		top: "82.63%"
  	},
  	text5: {
    		top: "10.33%"
  	},
  	text6: {
    		top: "51.64%"
  	},
  	text7: {
    		top: "30.99%"
  	},
  	text8: {
    		top: "72.3%"
  	},
  	text9: {
    		top: "92.96%"
  	},
  	xAxisLabels: {
    		height: "61.26%",
    		width: "4.86%",
    		top: "21.63%",
    		right: "90.53%",
    		bottom: "17.11%",
    		left: "4.61%",
    		position: "absolute"
  	},
  	seriesOneHere: {
    		width: "73.91%",
    		left: "26%"
  	},
  	s1Block: {
    		backgroundColor: "#2b3695",
    		right: "80.32%",
    		width: "19.68%",
    		borderRadius: 5,
    		bottom: "43.03%",
    		top: "50.17%",
    		height: "6.8%"
  	},
  	series1: {
    		right: "52.98%",
    		width: "47.02%",
    		left: "0%"
  	},
  	s3Block: {
    		backgroundColor: "#adb4f3",
    		right: "80.32%",
    		width: "19.68%",
    		borderRadius: 5,
    		bottom: "43.03%",
    		top: "50.17%",
    		height: "6.8%"
  	},
  	series3: {
    		top: "44.45%",
    		bottom: "0.17%",
    		height: "55.38%",
    		right: "52.98%",
    		width: "47.02%",
    		position: "absolute"
  	},
  	seriesTwoHere: {
    		width: "75.22%",
    		left: "24.7%"
  	},
  	s2Block: {
    		width: "20.03%",
    		right: "79.97%",
    		backgroundColor: "#6976eb",
    		borderRadius: 5,
    		bottom: "43.03%",
    		top: "50.17%",
    		height: "6.8%"
  	},
  	series2: {
    		width: "46.2%",
    		right: "0.01%",
    		left: "53.79%"
  	},
  	legend: {
    		height: "11.02%",
    		width: "44.62%",
    		top: "4.69%",
    		right: "1.81%",
    		bottom: "84.29%",
    		left: "53.58%",
    		position: "absolute"
  	},
  	gridLinesIcon: {
    		height: "62.86%",
    		width: "83.03%",
    		top: "17.96%",
    		right: "5.09%",
    		bottom: "19.18%",
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%"
  	},
  	jan: {
    		left: "1.17%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	may: {
    		left: "34.99%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	sep: {
    		left: "68.81%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	mar: {
    		left: "18.08%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	jul: {
    		left: "51.9%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	nov: {
    		left: "85.72%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	feb: {
    		left: "9.62%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	jun: {
    		left: "43.44%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	oct: {
    		left: "77.26%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	apr: {
    		left: "26.53%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	aug: {
    		left: "60.35%",
    		color: "#483eb7",
    		fontFamily: "Lato-Bold",
    		fontWeight: "700"
  	},
  	dec: {
    		left: "94.17%",
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		justifyContent: "center",
    		fontSize: 8,
    		top: "49.9%",
    		width: "5.85%",
    		height: "49.66%",
    		fontFamily: "Lato-Regular"
  	},
  	axisLine: {
    		height: "6.9%",
    		width: "100.22%",
    		right: "-0.22%",
    		bottom: "93.1%",
    		borderColor: "rgba(0, 0, 0, 0.06)",
    		top: "0%",
    		left: "0%"
  	},
  	xAxis: {
    		height: "8.59%",
    		width: "83.15%",
    		top: "81.03%",
    		right: "4.97%",
    		bottom: "10.38%"
  	},
  	series3Graph: {
    		height: "33.06%",
    		width: "78.2%",
    		top: "29.19%",
    		right: "6.9%",
    		bottom: "37.76%",
    		left: "14.91%",
    		maxHeight: "100%",
    		overflow: "hidden",
    		maxWidth: "100%",
    		position: "absolute"
  	},
  	series2Icon: {
    		height: "50.83%",
    		top: "23.88%",
    		bottom: "25.29%"
  	},
  	series1Graph: {
    		height: "26.54%",
    		top: "48.37%",
    		bottom: "25.09%"
  	},
  	lineChart: {
    		height: "19.7%",
    		width: "87.2%",
    		top: "48.31%",
    		right: "6.4%",
    		bottom: "32%",
    		left: "6.4%",
    		position: "absolute"
  	},
  	component4: {
    		flex: 1,
    		height: 857,
    		width: "100%"
  	}
});

export default Component;
**/
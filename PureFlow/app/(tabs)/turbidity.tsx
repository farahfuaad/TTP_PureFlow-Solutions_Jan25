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

const TurbidityPage = () => {
  	
  	return (
    		<View style={styles.turbidityPage}>
      			<View style={styles.component6}>
        				<Pressable style={styles.group} onPress={()=>{}}>
          					<Image style={styles.icon} resizeMode="cover" source="Group.png" />
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
        				<Text style={styles.todaysTurbidityReadings}>Today’s Turbidity Readings:</Text>
        				<Text style={styles.ntu}>5 NTU</Text>
        				<View style={[styles.component6Child, styles.baseShadowBox]} />
        				<View style={styles.rowStylesParent}>
          					<View style={styles.rowStyles}>
            						<View style={[styles.gridStyles, styles.gridFlexBox]}>
              							<View style={[styles.cells, styles.cellsLayout]}>
                								<View style={[styles.headerText, styles.cells2SpaceBlock]}>
                  									<View style={[styles.valueWrapper, styles.textFlexBox]}>
                    										<Text style={[styles.value, styles.valueFlexBox]}>Date</Text>
                  									</View>
                								</View>
              							</View>
              							<View style={[styles.cells, styles.cellsLayout]}>
                								<View style={[styles.headerText, styles.cells2SpaceBlock]}>
                  									<View style={[styles.valueWrapper, styles.textFlexBox]}>
                    										<Text style={[styles.value, styles.valueFlexBox]}>Reading</Text>
                  									</View>
                								</View>
              							</View>
            						</View>
          					</View>
          					<View style={[styles.rowStyles1, styles.rowPosition]}>
            						<View style={[styles.gridStyles1, styles.gridFlexBox]}>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>13 Feb,2026 - 10:15 AM	</Text>
                								</View>
              							</View>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>5 NTU</Text>
                								</View>
              							</View>
            						</View>
          					</View>
          					<View style={[styles.rowStyles2, styles.rowPosition]}>
            						<View style={[styles.gridStyles1, styles.gridFlexBox]}>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>9 Feb,2026 - 9:15 PM	</Text>
                								</View>
              							</View>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>7 NTU</Text>
                								</View>
              							</View>
            						</View>
          					</View>
          					<View style={[styles.rowStyles3, styles.rowPosition]}>
            						<View style={[styles.gridStyles1, styles.gridFlexBox]}>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>9 Feb,2026 - 2:45 PM	</Text>
                								</View>
              							</View>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>5 NTU</Text>
                								</View>
              							</View>
            						</View>
          					</View>
          					<View style={[styles.rowStyles4, styles.rowPosition]}>
            						<View style={[styles.gridStyles1, styles.gridFlexBox]}>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>10 Feb,2026 - 4:30 PM	</Text>
                								</View>
              							</View>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>6 NTU</Text>
                								</View>
              							</View>
            						</View>
          					</View>
          					<View style={[styles.rowStyles5, styles.rowPosition]}>
            						<View style={[styles.gridStyles1, styles.gridFlexBox]}>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>13 Feb,2026 - 9:50 AM	</Text>
                								</View>
              							</View>
              							<View style={[styles.cells2, styles.cells2SpaceBlock]}>
                								<View style={[styles.text, styles.textFlexBox]}>
                  									<Text style={[styles.value2, styles.valueFlexBox]}>4 NTU</Text>
                								</View>
              							</View>
            						</View>
          					</View>
        				</View>
        				<Text style={[styles.turbidityHistory, styles.augTypo]}>Turbidity History</Text>
        				<View style={[styles.lineChart, styles.baseLayout]}>
          					<View style={[styles.base, styles.baseLayout]} />
          					<View style={[styles.filter, styles.boxLayout1]}>
            						<View style={[styles.dropDownBox, styles.boxLayout]}>
              							<View style={[styles.textBox, styles.boxLayout]}>
                								<View style={[styles.line, styles.lineBorder]} />
                								<Text style={styles.taskTitle}>This week</Text>
              							</View>
            						</View>
            						<Text style={styles.itemApprovalsIn}>Item approvals in</Text>
            						<Down style={styles.downIcon} width={10} height={8} />
          					</View>
          					<View style={styles.xAxisLabels}>
            						<Text style={[styles.text10, styles.textTypo]}>90</Text>
            						<Text style={[styles.text11, styles.textTypo]}>50</Text>
            						<Text style={[styles.text12, styles.textTypo]}>70</Text>
            						<Text style={[styles.text13, styles.textTypo]}>30</Text>
            						<Text style={[styles.text14, styles.textTypo]}>10</Text>
            						<Text style={[styles.text15, styles.textTypo]}>80</Text>
            						<Text style={[styles.text16, styles.textTypo]}>40</Text>
            						<Text style={[styles.text17, styles.textTypo]}>60</Text>
            						<Text style={[styles.text18, styles.textTypo]}>20</Text>
            						<Text style={[styles.text19, styles.textTypo]}>00</Text>
          					</View>
          					<View style={styles.legend}>
            						<View style={[styles.series1, styles.seriesLayout]}>
              							<Text style={[styles.seriesOneHere, styles.seriesTypo]}>Series one here</Text>
              							<View style={[styles.s1Block, styles.blockPosition]} />
            						</View>
            						<View style={[styles.series3, styles.seriesLayout]}>
              							<Text style={[styles.seriesOneHere, styles.seriesTypo]}>Series one here</Text>
              							<View style={[styles.s3Block, styles.blockPosition]} />
            						</View>
            						<View style={[styles.series2, styles.seriesLayout]}>
              							<Text style={[styles.seriesTwoHere, styles.seriesTypo]}>Series two here</Text>
              							<View style={[styles.s2Block, styles.blockPosition]} />
            						</View>
          					</View>
          					<Gridlines style={[styles.gridLinesIcon, styles.xAxisPosition]} width={272} height={106} />
          					<View style={[styles.xAxis, styles.xAxisPosition]}>
            						<Text style={[styles.jan, styles.janFlexBox]}>Jan</Text>
            						<Text style={[styles.may, styles.janFlexBox]}>May</Text>
            						<Text style={[styles.sep, styles.janFlexBox]}>Sep</Text>
            						<Text style={[styles.mar, styles.marPosition]}>Mar</Text>
            						<Text style={[styles.jul, styles.janFlexBox]}>Jul</Text>
            						<Text style={[styles.nov, styles.janFlexBox]}>Nov</Text>
            						<Text style={[styles.feb, styles.janFlexBox]}>Feb</Text>
            						<Text style={[styles.jun, styles.janFlexBox]}>Jun</Text>
            						<Text style={[styles.oct, styles.janFlexBox]}>Oct</Text>
            						<Text style={[styles.apr, styles.janFlexBox]}>Apr</Text>
            						<Text style={[styles.aug, styles.janFlexBox]}>Aug</Text>
            						<Text style={[styles.dec, styles.janFlexBox]}>Dec</Text>
            						<View style={[styles.axisLine, styles.blockPosition]} />
          					</View>
          					<Series3graph style={[styles.series3Graph, styles.marPosition]} width={256} height={56} />
          					<Series2 style={[styles.series2Icon, styles.series2IconPosition]} width={255} height={86} />
          					<Series1graph style={[styles.series1Graph, styles.series2IconPosition]} width={255} height={45} />
        				</View>
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
  	baseShadowBox: {
    		borderRadius: 15,
    		elevation: 15,
    		shadowRadius: 15,
    		shadowColor: "rgba(0, 0, 0, 0.12)",
    		shadowOpacity: 1,
    		backgroundColor: "#fff"
  	},
  	gridFlexBox: {
    		gap: 8,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
    		alignSelf: "stretch"
  	},
  	cellsLayout: {
    		height: 50,
    		flex: 1
  	},
  	cells2SpaceBlock: {
    		paddingVertical: 0,
    		paddingHorizontal: 8
  	},
  	textFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	valueFlexBox: {
    		display: "flex",
    		alignItems: "center",
    		textAlign: "left"
  	},
  	rowPosition: {
    		paddingVertical: 8,
    		paddingHorizontal: 16,
    		borderColor: "#d1d1d1",
    		height: "17.45%",
    		borderTopWidth: 1,
    		borderBottomWidth: 1,
    		borderStyle: "solid",
    		left: "0%",
    		right: "0%",
    		position: "absolute",
    		width: "100%",
    		backgroundColor: "#fff"
  	},
  	augTypo: {
    		fontFamily: "Lato-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	baseLayout: {
    		height: 169,
    		width: 327,
    		position: "absolute"
  	},
  	boxLayout1: {
    		height: 13,
    		position: "absolute"
  	},
  	boxLayout: {
    		width: 67,
    		top: 0
  	},
  	lineBorder: {
    		borderTopWidth: 1,
    		borderStyle: "solid"
  	},
  	textTypo: {
    		textAlign: "right",
    		color: "rgba(128, 128, 128, 0.69)",
    		width: 16,
    		height: 7,
    		fontFamily: "Lato-Regular",
    		display: "flex",
    		fontSize: 10,
    		alignItems: "center",
    		left: 0,
    		position: "absolute"
  	},
  	seriesLayout: {
    		height: 10,
    		position: "absolute"
  	},
  	seriesTypo: {
    		width: 51,
    		color: "rgba(22, 26, 65, 0.46)",
    		height: 10,
    		fontSize: 7,
    		fontFamily: "Lato-Bold",
    		display: "flex",
    		fontWeight: "700",
    		alignItems: "center",
    		textAlign: "left",
    		top: 0,
    		position: "absolute"
  	},
  	blockPosition: {
    		height: 1,
    		left: 0,
    		position: "absolute"
  	},
  	xAxisPosition: {
    		width: 272,
    		left: 39,
    		position: "absolute"
  	},
  	janFlexBox: {
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		width: 16,
    		height: 7,
    		display: "flex",
    		justifyContent: "center",
    		alignItems: "center",
    		textAlign: "center"
  	},
  	marPosition: {
    		left: 49,
    		position: "absolute"
  	},
  	series2IconPosition: {
    		width: 255,
    		left: 49,
    		position: "absolute"
  	},
  	icon: {
    		nodeWidth: "5.33%",
    		nodeHeight: "2.14%",
    		maxHeight: "100%",
    		height: "100%",
    		overflow: "hidden",
    		maxWidth: "100%",
    		width: "100%"
  	},
  	group: {
    		left: "12.8%",
    		top: "8.53%",
    		right: "81.87%",
    		bottom: "89.33%",
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
    		color: "#26a3ea",
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
    		fontWeight: "500",
    		color: "#000"
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
    		height: "20.44%",
    		top: "79.56%",
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	todaysTurbidityReadings: {
    		top: "14.02%",
    		left: "24.53%",
    		fontSize: 14,
    		letterSpacing: -0.1,
    		fontFamily: "Poppins-Medium",
    		color: "#9fa4a9",
    		textAlign: "left",
    		lineHeight: 24,
    		fontWeight: "500",
    		position: "absolute"
  	},
  	ntu: {
    		height: "3.97%",
    		width: "53.07%",
    		top: "18.93%",
    		left: "23.47%",
    		fontSize: 40,
    		letterSpacing: -0.4,
    		fontWeight: "600",
    		fontFamily: "Poppins-SemiBold",
    		lineHeight: 24,
    		textAlign: "center",
    		color: "#26a3ea",
    		position: "absolute"
  	},
  	component6Child: {
    		height: "33.29%",
    		width: "86.13%",
    		top: "26.05%",
    		right: "6.93%",
    		bottom: "40.65%",
    		left: "6.93%",
    		position: "absolute"
  	},
  	value: {
    		fontFamily: "DMSans-Bold",
    		color: "#333",
    		lineHeight: 20,
    		fontSize: 10,
    		display: "flex",
    		letterSpacing: 0,
    		flex: 1,
    		fontWeight: "700",
    		alignSelf: "stretch"
  	},
  	valueWrapper: {
    		alignSelf: "stretch",
    		flexDirection: "row",
    		flex: 1
  	},
  	headerText: {
    		width: 150,
    		alignItems: "center",
    		flexDirection: "row",
    		alignSelf: "stretch"
  	},
  	cells: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	gridStyles: {
    		height: 30
  	},
  	rowStyles: {
    		height: "14.85%",
    		bottom: "85.15%",
    		borderTopLeftRadius: 6,
    		borderTopRightRadius: 6,
    		backgroundColor: "rgba(159, 164, 169, 0.12)",
    		borderColor: "#fff",
    		paddingHorizontal: 20,
    		paddingVertical: 4,
    		borderBottomWidth: 1,
    		borderStyle: "solid",
    		top: "0%",
    		left: "0%",
    		right: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	value2: {
    		fontFamily: "DMSans-Regular",
    		color: "#333",
    		lineHeight: 20,
    		fontSize: 10,
    		display: "flex",
    		letterSpacing: 0,
    		flex: 1,
    		height: 50
  	},
  	text: {
    		alignSelf: "stretch",
    		flexDirection: "row"
  	},
  	cells2: {
    		height: 50,
    		flex: 1
  	},
  	gridStyles1: {
    		flex: 1
  	},
  	rowStyles1: {
    		top: "14.59%",
    		bottom: "67.96%"
  	},
  	rowStyles2: {
    		top: "82.75%",
    		bottom: "-0.19%"
  	},
  	rowStyles3: {
    		top: "65.71%",
    		bottom: "16.85%"
  	},
  	rowStyles4: {
    		top: "48.67%",
    		bottom: "33.89%"
  	},
  	rowStyles5: {
    		top: "31.63%",
    		bottom: "50.92%"
  	},
  	rowStylesParent: {
    		height: "27.45%",
    		width: "80%",
    		top: "30.72%",
    		right: "9.87%",
    		bottom: "41.82%",
    		left: "10.13%",
    		elevation: 15,
    		shadowRadius: 15,
    		shadowColor: "rgba(0, 0, 0, 0.12)",
    		shadowOpacity: 1,
    		position: "absolute"
  	},
  	turbidityHistory: {
    		height: "2.94%",
    		width: "66.37%",
    		top: "26.87%",
    		left: "11.73%",
    		color: "#3d3939",
    		display: "flex",
    		alignItems: "center",
    		textAlign: "left",
    		fontSize: 12,
    		fontFamily: "Lato-Bold"
  	},
  	base: {
    		borderRadius: 15,
    		elevation: 15,
    		shadowRadius: 15,
    		shadowColor: "rgba(0, 0, 0, 0.12)",
    		shadowOpacity: 1,
    		backgroundColor: "#fff",
    		left: 0,
    		top: 0
  	},
  	line: {
    		height: "7.52%",
    		width: "101.48%",
    		top: "95.92%",
    		right: "-0.74%",
    		bottom: "-3.44%",
    		left: "-0.74%",
    		borderColor: "rgba(0, 0, 0, 0.11)",
    		position: "absolute"
  	},
  	taskTitle: {
    		height: "54.14%",
    		width: "50.59%",
    		left: "0.6%",
    		color: "rgba(0, 0, 0, 0.44)",
    		fontFamily: "Lato-Regular",
    		fontSize: 7,
    		display: "flex",
    		alignItems: "center",
    		textAlign: "left",
    		top: "0%",
    		position: "absolute"
  	},
  	textBox: {
    		height: 13,
    		position: "absolute",
    		left: 0
  	},
  	dropDownBox: {
    		left: 65,
    		height: 13,
    		position: "absolute"
  	},
  	itemApprovalsIn: {
    		color: "#808080",
    		width: 63,
    		height: 7,
    		top: 1,
    		fontSize: 7,
    		fontFamily: "Lato-Bold",
    		display: "flex",
    		fontWeight: "700",
    		alignItems: "center",
    		textAlign: "left",
    		left: 0,
    		position: "absolute"
  	},
  	downIcon: {
    		left: 124,
    		top: 1,
    		overflow: "hidden",
    		position: "absolute"
  	},
  	filter: {
    		top: 13,
    		left: 19,
    		width: 134
  	},
  	text10: {
    		top: 0
  	},
  	text11: {
    		top: 43
  	},
  	text12: {
    		top: 21
  	},
  	text13: {
    		top: 64
  	},
  	text14: {
    		top: 85
  	},
  	text15: {
    		top: 11
  	},
  	text16: {
    		top: 53
  	},
  	text17: {
    		top: 32
  	},
  	text18: {
    		top: 75
  	},
  	text19: {
    		top: 96
  	},
  	xAxisLabels: {
    		top: 37,
    		left: 15,
    		height: 103,
    		width: 16,
    		position: "absolute"
  	},
  	seriesOneHere: {
    		left: 18
  	},
  	s1Block: {
    		backgroundColor: "#2b3695",
    		width: 13,
    		borderRadius: 5,
    		top: 5,
    		height: 1
  	},
  	series1: {
    		width: 69,
    		height: 10,
    		left: 0,
    		top: 0
  	},
  	s3Block: {
    		backgroundColor: "#adb4f3",
    		width: 13,
    		borderRadius: 5,
    		top: 5,
    		height: 1
  	},
  	series3: {
    		width: 69,
    		height: 10,
    		left: 0,
    		top: 8
  	},
  	seriesTwoHere: {
    		left: 17
  	},
  	s2Block: {
    		backgroundColor: "#6976eb",
    		width: 13,
    		borderRadius: 5,
    		top: 5,
    		height: 1
  	},
  	series2: {
    		left: 78,
    		width: 67,
    		top: 0
  	},
  	legend: {
    		left: 175,
    		width: 146,
    		height: 19,
    		top: 8,
    		position: "absolute"
  	},
  	gridLinesIcon: {
    		top: 30
  	},
  	jan: {
    		left: 3,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	may: {
    		left: 95,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	sep: {
    		left: 187,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	mar: {
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		width: 16,
    		height: 7,
    		display: "flex",
    		justifyContent: "center",
    		alignItems: "center",
    		textAlign: "center",
    		color: "rgba(128, 128, 128, 0.69)",
    		fontFamily: "Lato-Regular"
  	},
  	jul: {
    		left: 141,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	nov: {
    		left: 233,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	feb: {
    		left: 26,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	jun: {
    		left: 118,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	oct: {
    		left: 210,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	apr: {
    		left: 72,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	aug: {
    		left: 164,
    		color: "#483eb7",
    		fontFamily: "Lato-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	dec: {
    		left: 256,
    		color: "rgba(128, 128, 128, 0.69)",
    		opacity: 0.7,
    		fontSize: 8,
    		top: 7,
    		fontFamily: "Lato-Regular",
    		position: "absolute"
  	},
  	axisLine: {
    		borderColor: "rgba(0, 0, 0, 0.06)",
    		width: 273,
    		borderTopWidth: 1,
    		borderStyle: "solid",
    		top: 0
  	},
  	xAxis: {
    		top: 137,
    		height: 14
  	},
  	series3Graph: {
    		top: 49
  	},
  	series2Icon: {
    		top: 40
  	},
  	series1Graph: {
    		top: 82
  	},
  	lineChart: {
    		top: 531,
    		left: 25
  	},
  	component6: {
    		width: 375,
    		height: 856,
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	turbidityPage: {
    		height: 812,
    		width: "100%",
    		flex: 1,
    		backgroundColor: "#fff"
  	}
});

export default TurbidityPage;
**/
#include <OneWire.h>
#include <DallasTemperature.h>

// Define sensor pins
#define OD_PIN A0
#define PH_PIN A1
#define TURBIDITY_PIN A2
#define ONE_WIRE_BUS 2  // Temperature sensor pin
#define TDS_PIN A3

// Initialize OneWire and DS18B20 temperature sensor
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(115200);
  Serial.println("Reading Sensor Values...");
  sensors.begin(); // Initialize the temperature sensor
}

void loop() {
  // Read raw values
  int rawOD = analogRead(OD_PIN);
  int rawPH = analogRead(PH_PIN);
  int rawTurbidity = analogRead(TURBIDITY_PIN);
  int rawTDS = analogRead(TDS_PIN);

  // Convert raw values to meaningful units
  float odValue = (rawOD / 1023.0) * 10.0; 
  float phVoltage = (rawPH / 1023.0) * 5; 
  float phValue =  4.5 + (2.5 - phVoltage) * 3.5; 
  float turbidityValue = (rawTurbidity / 1023.0) * 3.5; 
  float tdsValue = (rawTDS / 1023.0) * 1000.0;

  // Read temperature
  sensors.requestTemperatures();
  float temperature = sensors.getTempCByIndex(0); 

  // Print sensor values
  Serial.print("OD Value: "); Serial.print(odValue, 2); Serial.println(" mg/L");
  Serial.print("pH Value: "); Serial.print(phValue, 2); Serial.println();
  Serial.print("Temperature: "); Serial.print(temperature, 2); Serial.println(" °C");
  Serial.print("Turbidity (NTU): "); Serial.print(turbidityValue, 2); Serial.println();
  Serial.print("TDS (ppm): "); Serial.print(tdsValue, 2); Serial.println();
  Serial.println("-------------------------------------");

  delay(2000); // Delay for readability
}

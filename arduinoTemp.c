#include "DHT.h"
#define Type DHT11
#define ledR 8
#define ledV 7

int sensorPin = 2;
DHT objetDHT11(sensorPin, Type);
float humidite;
float tempC;
float tempF;
int setTime = 500;
int delayTime = 1000;

void setup() {
Serial.begin(9600);
objetDHT11.begin();
delay(setTime);
pinMode(ledR, OUTPUT);
pinMode(ledV, OUTPUT);
}

void loop() {
  humidite = objetDHT11.readHumidity();
  tempC = objetDHT11.readTemperature();
  tempF = objetDHT11.readTemperature(true);
//Serial.println("Temperature: \t");
Serial.println(tempC);
delay(delayTime);
if(tempC <= 26 ){
  ledOn(ledV);
  ledOff(ledR);
  }
  else{
  ledOn(ledR);
  ledOff(ledV);
  }
}

void ledOn(int number){
  digitalWrite(number, HIGH);
  }
  void ledOff(int number){
  digitalWrite(number, LOW);
  }
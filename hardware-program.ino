//容器温度控制v3.0
#include <OneWire.h>
#include <DallasTemperature.h>

// 温度传感器引脚
#define ONE_WIRE_BUS A1

// PWM电机水泵引脚
#define PUMP1_PIN 3
#define PUMP2_PIN 5
#define PUMP3_PIN 6

// 加热片引脚
#define HEATING_PIN 11

// 温度范围
#define MIN_TEMP 36
#define MAX_TEMP 38

// 持续时间
#define PUMP1_DURATION 10 * 1000 // 10sec
#define PUMP2_DURATION 15 * 1000 // 15sec
#define PUMP3_DURATION 9 * 1000 // 9sec

// 定义温度传感器对象
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  // 初始化PWM电机水泵引脚
  pinMode(PUMP1_PIN, OUTPUT);
  pinMode(PUMP2_PIN, OUTPUT);
  pinMode(PUMP3_PIN, OUTPUT);

  // 初始化加热片引脚
  pinMode(HEATING_PIN, OUTPUT);

  // 启动串口通信
  Serial.begin(9600);

  // 初始化温度传感器
  sensors.begin();
}

void loop() {
  
  // 控制PWM电机水泵1输送液体到容器中
  startPump(PUMP2_PIN, PUMP1_DURATION,250);

  // 控制PWM电机水泵2输送液体到容器中
  startPump(PUMP2_PIN, PUMP2_DURATION, 191);

  //控制加热片加热，使温度维持在36度到38度
  maintainTemperature();

  // 延迟120分钟
  delay(120 * 60 * 1000);

  // 控制PWM电机水泵3输送液体到容器中
  startPump(PUMP3_PIN, PUMP3_DURATION, 180);

  // 再次控制加热片加热，使温度维持在36度到38度
  maintainTemperature();

  // 延迟30分钟
  delay(30 * 60 * 1000);
  
}

// 控制PWM电机启动一段时间和转速
void startPump(int pumpPin, unsigned long duration, int speed) {
  analogWrite(pumpPin, speed);
  delay(duration);
  analogWrite(pumpPin, 255);
}

// 控制加热片维持温度
void maintainTemperature() {
  unsigned long startTime = millis();

  while (millis() - startTime < PUMP1_DURATION) {
    sensors.requestTemperatures();
    float temp = sensors.getTempCByIndex(0);

    if (temp < MIN_TEMP) {
      digitalWrite(HEATING_PIN, HIGH);
    } else if (temp > MAX_TEMP) {
      digitalWrite(HEATING_PIN, LOW);
    }

    delay(1000);
  }
}
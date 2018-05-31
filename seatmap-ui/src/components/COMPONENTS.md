### Components Type

* Seat
* MeetingRoom

### Area



#### Seat

> props

1. coordinate(x, y) - **Required**
2. userInfo - displayed userInfo on Seat component - **Optional**
  1. userName
  2. teamName
  3. jobTitle
  4. skills
  5. 
3. isOccupied - default false




#### MeetingRoom

> props

1. coordinate(x, y) - **Required**
2. meetingRoomInfo - **Required**
  1. name
  2. size - 按照可容纳人数定义
  3. 是否有多媒体设备
  4. 是否有WiFi
  5. 设备保修状态 - 如果有设备需要修理，给出一个warn的图标
3. isAvailable - default false
## Components Type

* Seat
* MeetingRoom

### Area

> Props

1. areaName
2. areaId

#### Seat

> props

1. coordinates(x, y) - **Required**
2. userInfo - displayed userInfo on Seat component - **Optional**
  1. userName
  2. teamName
  3. jobTitle
  4. skills
  5. 
3. isOccupied - default false
4. type - 

> Data Define

{
  seat: {
    coordinates: {x_coordinate: '0',y_corrdinate: '25'},
    userInfo: {userName: 'Roy', teamName: 'GRO', jobTitle: '', skills: ['React', 'Java', 'JSP', 'FTL']},
    isOccupied: true
  }
}


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
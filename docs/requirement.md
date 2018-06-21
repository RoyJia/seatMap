### Requirement

> digital platform

### 背景

Expedia ODC的办公区大大小小存在20多个Team，但是Team内部人员并不了解除了自己所在Team之外的Team。比如GRO Team在做一个任务，需要针对Hotel Shopping做出一些改动而且碰到了问题，这时需要寻求外部的帮助，如果可以通过一个平台查询到办公室Lodging Shopping Team，将会节省很多时间。另外可以在某个电视上轮播显示各个Team的信息。


### Background

There are more than twenty teams in Expedia ODC's office, but Team internal staff do not know other Teams besides their own team. For example, the GRO Team encounters problems about Hotel Shopping while they are doing a task and need to make some changes. At this time, they will needs external help. If you can find the office Lodging Shopping Team through a platform, it will save a lot of time. In addition, it is possible to rotate and display each Team's information on a television.




### 功能

1. 展示功能：用可以灵活拉伸的平面图展示办公区工位。可以放大缩小进行页面信息详细程度的控制。可以展示个人信息（例如姓名，职位，skills等）、Team信息（例如Team等工作内容等）。展示功能基于权限控制，对不同权限的用户展示的内容程度有所不同。
2. 搜索功能：通过搜索，可定位到Team、个人、meetingroom，高亮显示该区域并呈现具体的信息，例如 Team名字、成员、职能等。
3. 维护功能：可以对工位、人员信息进行维护。例如 当有人离职，或者新人入职时可以及时更新信息、上传。
4. 会议室维护和服务追踪：关联outlook数据，在MeetingRoom的上显示会议室使用状态、高亮出可以使用的会议室等。
5. 数据报表：创建联动的综合管理报表，例如 可以进行工位利用率统计、缺勤率，离职率，新入职人员
6. 考勤数据展示：关联Pactera Hub 考勤数据，显示和统计相关数据。
7. 员工积分展示：关联SharePoint数据，展示员工积分。

### Function

1. Display function: Show office workstations with a flexible plan which can be dragged and pulled. You can zoom in and out to control the detail level of page information. Also can show Personal information (such as name, position, skills, etc.) and Team information (such as Team, etc.) can be displayed. The display function is based on privilege control, The degree of detail of the displayed information depends on the user's permission level.
2. Search function: Using search, you can locate Team, personal, meetingroom. It can highlight the area and present specific information, such as Team name, membership, and its functions. 
3. Maintenance function: You can maintain the seat station and personnel information. For example, when the someone leaves the company or a new person joins the company, they can update their information and upload it on this platform.
4. Conference room maintenance and service tracking: Associate with Outlook data, displaying meeting room's usage status, highlighting available meeting rooms, etc.
5. Data Reports: Create integrated management reports, for example, statistics of job utilization, absenteeism, turnover, new employees' info, etc.
6. Attendance data display: Associate with Pactera Hub attendance data, display and statistics these related data.
7. Employee Point Display: Link SharePoint data to show employee points.




### UI Design

整个办公区的平面图应该是什么样的？
细化到一个工位的UI，一个会议室的UI应该是怎样的？

### 数据库表设计
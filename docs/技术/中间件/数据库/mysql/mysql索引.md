# mysql 索引


## 日期索引失效

``` sql
explain 
SELECT         id,         msg_no AS msgNo,         keyword_id AS keywordId,         keyword,         alarm_type AS alarmType,         sms,         mail_content AS mailContent,         send_time AS sendTime,         mobile,         mail_address AS mailAddress,         src_ip AS srcIp,         msg_status AS msgStatus,         create_emp AS createEmp,         create_time AS createTime,         modify_emp AS modifyEmp,         modify_time AS modifyTime,         project_name AS projectName,         alarm_task_class AS alarmTaskClass,         delivery_time AS deliveryTime,         member_id AS memberId,         apns_type AS apnsType,         url AS url,         order_id AS orderId        FROM           t_alarm_msg            WHERE           msg_status = 1          AND create_time <= '2020-03-26 09:30:00.024'          AND create_time >= '2020-03-23 09:40:00.024';
```
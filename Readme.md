### Table Props

| 属性          | 说明                                                         | 类型    | 默认值                         |
| ------------- | ------------------------------------------------------------ | ------- | ------------------------------ |
| tableData     | 显示的表格结构化数据                                         | Array   | []                             |
| coloms        | 表格列的配置描述，具体项见后文                               | Array   | []                             |
| key           | 对应列内容的字段名                                           |         |                                |
| tableHeight   | tbody区域高度，内容大于高度会出现滚动条。                    | Number  | 1000rpx/55px(ios6s)/50px(ios6) |
| tableWidth    | tbody横向可见区域，默认宽度为600rpx;超出范围会出现横向滚动条。 | Number  | 600                            |
| stripe        | 每一行数据表格的颜色,stripeEven为偶数行的颜色。stripeOdd为奇数行的颜色。同色必传。 | String  | #000000                        |
| show_Header   | 是否显示表头。                                               | Boolean | true                           |
| lineHeight    | 行高                                                         | Number  | 100                            |
| tbodyBorder   | tbody的边框样式                                              | String  | Null                           |
| rowBorder     | 每行的边框样式                                               | String  | Null                           |
| colmnBorder   | 每列的边框样式                                               | String  | Null                           |
| tHeaderBorder | 表头边框样式                                                 | String  | Null                           |



### Coloms  Props

| 属性       | 说明                               | 类型   | 默认值 |
| ---------- | ---------------------------------- | ------ | ------ |
| key        | 对应列内容的字段名                 | String | -      |
| width      | 列表头宽度,且权重小于headerWidth。 | Number | -      |
| background | 表头颜色                           | String | -      |
| title      | 列头显示文字                       | String | -      |
| height     | 列表头高度,且权重小于headerHeight  | Number | -      |


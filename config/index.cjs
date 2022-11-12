/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbf921e70935e6e27',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5d93e3cf87fa36d3cb2d43251b77bf12',

  PROVINCE: '安徽',
  CITY: '合肥',

  USERS: [
    {
      // 想要发送的人的名字
      name: '朋友',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obImO50wlikto0Xt199I_r8Eb28I',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'FUltKSlXLzgKbELewtYx2pNoUYQwZ85wAaDUOk8yZH0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '朋友', year: '1999', date: '02-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
     {
      name: '宝贝',
      id: 'obImO577Ar-qe8B6SeymRRZyTK7Y',
      useTemplateId: '	-je9oPwWC90NJbGWxEf4DF-oHxdaVtwGYBYY90vq2Ac',
      province: '安徽',
      city: '合肥',
      horoscopeDate: '12-30',
      horoscopeDateType: '今日',
      openUrl: 'https://wangxinleo.cn',
      festivals: [ // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1999', date: '02-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '狗子', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2022', date: '12-30',
        },
      ],
      customizedDateList: [// 在一起的日子
        { keyword: 'love_day', date: '2022-12-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },],
      courseSchedule: null
    },
  ],
  


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'sq2933363437',
    }
  ],

}

module.exports = USER_CONFIG


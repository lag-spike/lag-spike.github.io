/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  book: [
    'book/introduction',
    {
      label: '网络',
      type: 'category',
      link: {
        title: '网络类书籍',
        description: '物联网开发中涉及类目读书笔记',
        type: 'generated-index',
        keywords: ['TCP_IP'],
      },
      items: [
        {
          label: '图解TCP_IP',
          type: 'category',
          link: {
            description: '图解TCP_IP目录',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'book/network/图解TCP_IP',
            },
          ],
        },
      ],
    }
  ],
  skill: [
    'skill/introduction',
    {
      label: '开发语言',
      type: 'category',
      link: {
        title: '编程&脚本语言',
        description: '记录开发和学习中用到的开发/脚本语言',
        type: 'generated-index',
        keywords: ['C','script','Kconfig'],
      },
      items: [
        {
          label: 'C',
          type: 'category',
          link: {
            description: '对C语言细节, 语法等记录',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/language/c',
            },
          ],
        },
        {
          label: 'script',
          type: 'category',
          link: {
            description: '各类型脚本',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/language/script',
            },
          ],
        },
        {
          label: 'Kconfig',
          type: 'category',
          link: {
            description: 'Kconfig与menuconfig, 宏配置开关的相关记录',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/language/kconfig',
            },
          ],
        },
      ],
    },
    {
      label: '计算机基础',
      type: 'category',
      link: {
        title: '计算机相关基础',
        description: '嵌入式软件开发必要的计算机相关知识',
        type: 'generated-index',
        keywords: ['数据结构'],
      },
      items: [
        {
          label: '数据结构',
          type: 'category',
          link: {
            description: '对常用的数据结构学习记录',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/computer/data_structure',
            },
          ],
        },
      ],
    },
    {
      label: '协议',
      type: 'category',
      link: {
        title: '协议总结记录',
        description: '对学习和工作中, 所学到的协议, 总结, 归纳',
        type: 'generated-index',
        keywords: ['TCP/IP', 'Arm','MQTT'],
      },
      items: [
        {
          label: 'TCP/IP',
          type: 'category',
          link: {
            description: '有关TCP/IP协议的学习及调试过程',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/protocol/tcp_ip',
            },
          ],
        },
        {
          label: 'Arm',
          type: 'category',
          link: {
            description: '包含单片机常用的外设协议, uart, spi, i2c...',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/protocol/arm',
            },
          ],
        },
        {
          label: 'MQTT',
          type: 'category',
          link: {
            description: '关于MQTT协议的学习记录',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/protocol/mqtt',
            },
          ],
        },
      ],
    },
    {
      label: '单片机',
      type: 'category',
      link: {
        title: '单片机栏目',
        description: '不同类型单片机的开发和使用要点及坑的记录&单片机基本外设学习记录',
        type: 'generated-index',
        keywords: ['ESP8266','模块&外设'],
      },
      items: [
        {
          label: '模块&外设',
          type: 'category',
          link: {
            description: '对不同外设或模块使用过程及其记录',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/mcu/equipment',
            },
          ],
        },
        {
          label: 'ESP8266',
          type: 'category',
          link: {
            description: '对ESP8266使用时的过程及其他记录',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/mcu/esp8266',
            },
          ],
        },
      ],
    },
    {
      label: '操作系统',
      type: 'category',
      link: {
        title: '操作系统相关',
        description: '对使用的嵌入式操作系统的学习记录',
        type: 'generated-index',
        keywords: ['RTThread'],
      },
      items: [
        {
          label: 'RTThread',
          type: 'category',
          link: {
            description: '国产操作系统的学习记录',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/os/rtt',
            },
          ],
        },
      ],
    },
    {
      label: '开发工具',
      type: 'category',
      link: {
        title: '开发工具相关',
        description: '对相关工具技巧, 心得, 注意事项等记录',
        type: 'generated-index',
        keywords: ['git'],
      },
      items: [
        {
          label: 'git',
          type: 'category',
          link: {
            description: 'git',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/tools/git',
            },
          ],
        },
      ],
    },
    {
      label: 'LoRa',
      type: 'category',
      link: {
        title: 'LoRa专题',
        description: '对LoRa学习的记录',
        type: 'generated-index',
        keywords: ['射频模块','LoRaWAN'],
      },
      items: [
        {
          label: '射频模块',
          type: 'category',
          link: {
            description: '关于lora射频模块的技术实现及专有名词',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/lora/rf',
            },
          ],
        },
        {
          label: 'LoRaWAN',
          type: 'category',
          link: {
            description: '关于LoRaWAN协议的学习记录',
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/lora/lorawan',
            },
          ],
        },
      ],
    }
  ],
  tools: [
    // docs/tools ID
    'tools/introduction',
    'tools/exercise',
  ]
}

module.exports = sidebars

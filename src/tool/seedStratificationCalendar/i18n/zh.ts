import { createSeedCalendarContent } from '../localized';

export const content = createSeedCalendarContent({
  locale: 'zh',
  title: '种子层积处理与播种日期日历',
  description: '可以从播种日向前倒推，也可以从种子准备好的日期向后推算，建立带日期的准备计划。',
  faq: [
    { question: '这个日历计算什么？', answer: '它会把浸种、温暖湿润处理、低温湿润处理和播种安排到具体日期，可从目标日期倒推，也可从准备开始日顺推。' },
    { question: '为什么有两种日期模式？', answer: '播种日已经确定时使用播种日期模式；如果今天开始准备种子并想知道未来的播种日，则使用种子已准备模式。' },
    { question: '可以修改天数和温度吗？', answer: '可以。先选择一个品种档案，再根据种子包装、专业资料和当地条件调整各个阶段。' },
    { question: '按计划处理就一定会发芽吗？', answer: '不会。计划只能整理日期，种子年龄、活力、水分、休眠、霉菌和播种条件也会影响结果。' },
  ],
  howTo: [
    { name: '选择种子档案', text: '选择最接近的种类，以载入合理的初始阶段。' },
    { name: '选择日期模式', text: '从播种日倒推，或从种子准备好的日期顺推。' },
    { name: '检查处理阶段', text: '调整浸种、温暖、低温天数和低温范围。' },
    { name: '按日期顺序执行', text: '从开始日期着手，完成每个阶段，并在显示的日期播种。' },
  ],
  seoTitle: '规划准备周期',
  seoIntro: '种子休眠也是一个时间规划问题。需要湿冷期的种类如果准备太晚，可能会错过合适的播种窗口。没有必要地延长处理会浪费时间，也可能增加发霉或提前发芽的风险。这个日历把目标日期转换成清晰、可执行的步骤。',
  seoModes: '选择目标播种日即可倒推；选择种子已准备模式则从准备开始日顺推。每个阶段都有自己的日期，浸种会衔接到下一项处理，最后一项处理在播种前一天结束。结果可以用于容器标签或日历提醒。',
  seoPhaseTitle: '如何阅读各个阶段',
  seoPhaseItems: ['<strong>浸种：</strong>按照指定天数使种子吸水，没有明确理由不要延长。', '<strong>温暖：</strong>档案要求时，将湿润种子保持在温暖范围内。', '<strong>低温：</strong>保持湿润和低温，并定期检查霉菌或早生根。', '<strong>播种：</strong>在目标日期把处理好的种子移入合适的培养基。'],
  seoEvidenceTitle: '把档案当作起点',
  seoEvidence: '这些档案不是适用于所有情况的配方。品种、来源、种子年龄和包装说明都可能改变休眠要求。如果可靠供应商给出不同的处理时长，请编辑档案并记录所使用的资料，不要简单平均互相矛盾的建议。',
  seoTipTitle: '日历不是发芽测试',
  seoTip: '记录种子批次、湿润材料、温度和日期。如果低温处理时出现根，请小心播种。如果种子仍然休眠，也不要自动延长处理，先查看该种类的建议。',
  seoChecksTitle: '开始前检查',
  seoChecks: ['确认播种日期适合光照、霜冻和地点条件。', '在容器上写明种类、开始、结束和温度范围。', '使用湿润但通气的材料并定期检查。', '把计划和种子包装放在一起，以便追踪处理过程。'],
  seoLimitsTitle: '结果无法说明什么',
  seoLimits: '工具不会根据照片判断休眠，不会检测活力，也不能替代具体种类的说明。它不会预测当地天气，也不保证发芽。请把结果看作日期计算，并用合适的资料核实生物学条件。',
  ui: {
    labelProfile: '种子档案', labelMode: '计划模式', labelModeSowing: '我想在这天播种', labelModeReady: '种子今天准备好了', labelSowingDate: '目标播种日期', labelReadyDate: '准备开始日期', labelSoakDays: '浸种天数', labelWarmDays: '温暖天数', labelColdDays: '低温天数', labelColdRange: '低温范围', labelUnits: '温度单位', labelMetric: '公制 °C', labelImperial: '英制 °F', labelFrom: '最低温度', labelTo: '最高温度', labelGenerate: '更新日历', labelReset: '重置档案', labelAddCalendar: '添加到我的日历', labelShare: '复制链接', labelCopied: '链接已复制', labelPrint: '打印紧凑标签', labelTechnique: '方法', labelTodayStatus: '今日状态', labelDayOf: '第 / 天', labelGantt: '准备时间线', labelTimeline: '准备时间线', labelNextAction: '当前阶段', labelCalendarStarts: '日历开始', labelSowingDay: '播种日', labelDuration: '准备', labelDays: '天', labelTemperature: '温度', labelReady: '今天播种', labelUpcoming: '即将开始', labelActive: '进行中', labelComplete: '计划完成', labelEditHint: '请根据种子包装或专业资料调整建议。最后的设置会保存在此设备上。', labelWarm: '温暖层积处理', labelCold: '低温层积处理', labelSoak: '浸种', labelSow: '播种', noteApple: '短暂浸种后的湿冷期', noteLavender: '春季播种前的短暂低温期', noteMilkweed: '温暖阶段之后进行低温阶段', noteRose: '浸种后的长低温期', profileApple: '苹果 · Malus domestica', profileLavender: '薰衣草 · Lavandula angustifolia', profileMilkweed: '马利筋 · Asclepias syriaca', profileRose: '玫瑰 · Rosa spp.', profileStrawberry: '草莓 · Fragaria × ananassa', profilePeach: '桃 · Prunus persica', profileCherry: '甜樱桃 · Prunus avium', profilePear: '梨 · Pyrus communis', profilePoppy: '罂粟 · Papaver spp.', profileSunflower: '向日葵 · Helianthus annuus', profileTomato: '番茄 · Solanum lycopersicum', profileBasil: '罗勒 · Ocimum basilicum', instructionSoak: '在下一阶段前保持种子水分充足。', instructionWarm: '把湿润种子放在温暖处。', instructionCold: '保持种子湿润和低温，并定期检查。', instructionSow: '播种到准备好的培养基中。', emptyState: '设置日期以创建准备时间线。', warningDate: '请选择有效的播种日期。', warningTemperature: '更新日历前请检查天数和温度。',
  },
});

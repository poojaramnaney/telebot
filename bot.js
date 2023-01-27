const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('5853659168:AAGUOku5SeuGTRtBZb75tcIBSsmdySxsAs8');

bot.command('start', ctx=> {
    sendStartMessage(ctx);
})

bot.action('start', ctx =>{
    ctx.deleteMessage();
    sendStartMessage(ctx);   
})

function sendStartMessage(ctx){
    let startMessage = 'Niax bot welcomes you;)'
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Help', callback_data: 'help'},
                        { text: 'fortune',callback_data: 'fortune'}                         
                    ],
                    [
                        { text: 'Hackathon', callback_data: 'hackinfo'},  
                        { text: 'Registration', callback_data: 'registration'}             
                    ],
                    [
                        { text: 'FAQ', callback_data: 'faq'}
                    ]    
                ]            
            }
        })
}


const helpMessage = `
Say something to mention
/start - start the bot
/help - command reference
`;

function help(ctx){
    ctx.reply(helpMessage);
}


       

bot.action('hackinfo', ctx => {
    let hackMessage = 'get hackathon info:\n-NAME\n-THEME\n-LOCATION\n-MODE\n-SCHEDULE\n-PRIZES'
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'PROBLEM STATEMENTS', callback_data: 'ps'}
                    ],
                    [
                        { text: 'RULES', callback_data: 'rules'},
                        { text: 'RESOURCES', url:'https://www.youtube.com/watch?v=Lt-MY9LQLv0&list=PLX2ojSA27XYhIopdU2RRQIMe7gfwcKL84&index=66&ab_channel=TutorialWeekly'}
                    ],
                    [
                        { text: 'REGISTRATION COST', callback_data: 'regcost'},
                        { text: 'REMINDER', callback_data: 'rem'}
                    ],
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]
                    
                ]
            }
        })
})

bot.action('rules', ctx => {
  
    let hackMessage = 'rules are as follows:'
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('regcost', ctx => {
    
    let hackMessage = 'Its Free;)'
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('rem', ctx => {
    
    let hackMessage = 'reminder daalna hai'
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('ps', ctx => {
    
    bot.telegram.sendMessage(ctx.chat.id, 'PROBLEM STATEMENTS:',
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'NAME1', callback_data: 'N1'}                    
                    ],
                    [
                        { text: 'NAME2', callback_data: 'N2'}                
                    ],
                    [
                        { text: 'NAME3', callback_data: 'N3'}                    
                    ],
                    [
                        { text: 'NAME4', callback_data: 'N4'}                    
                    ]
    
                ]
            
            }
        })
    })

    bot.action('registration', ctx => {
    
        let hackMessage = 'daalna hai'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('help', ctx => {
    
        help(ctx)
    })

    bot.action('faq', ctx => {
        let faqMessage = 'HAVE FURTHER QUESTIONS?? DONT WORRY'
        
        bot.telegram.sendMessage(ctx.chat.id, faqMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'TEAM SIZE', callback_data: 'ts'}
                        ],
                        [
                            { text: 'WHO CAN PARTICIPATE', callback_data: 'wcp'}                            
                        ],
                        [
                            { text: 'TIMELINE', callback_data: 'timeline'}                            
                        ],
                        [
                            { text: 'CONTACT', callback_data: 'contact'}                        
                        ]
                        
                    ]
                }
            })
    })

    bot.action('ts', ctx => {
    
        let hackMessage = '2-4 members'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('wcp', ctx => {
    
        let hackMessage = 'yfogpjooiuytyuiol'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('timeline', ctx => {
    
        let hackMessage = 'likhdenge'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('contact', ctx => {
    
        let hackMessage = 'connect with us'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'insta', url:'https://www.youtube.com/watch?v=Lt-MY9LQLv0&list=PLX2ojSA27XYhIopdU2RRQIMe7gfwcKL84&index=66&ab_channel=TutorialWeekly' },                        
                        ],
                        [
                            { text: 'phone number', callback_data: 'no' },                        
                        ],
                        [
                            { text: 'email id', callback_data: 'id' },                        
                        ], 
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })
        
   


bot.launch();
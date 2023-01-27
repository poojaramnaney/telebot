const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('5658341849:AAHbgYkWUPR3Xx6-YW2u5AIOlovVM1p3h_M');
// kamya bot api -5853659168:AAGUOku5SeuGTRtBZb75tcIBSsmdySxsAs8
bot.command('start', ctx=> {
    sendStartMessage(ctx);
})

bot.action('start', ctx =>{
    // ctx.deleteMessage();
    sendStartMessage(ctx);   
})

function sendStartMessage(ctx){
    let startMessage = 'Heyy! Niax bot welcomes you:)'
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Help', callback_data: 'help'},
                        { text: 'Settings',callback_data: 'settings'}                         
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
/fortune - fortune cookie
`;

function help(ctx){
    ctx.reply(helpMessage);
}


       

bot.action('hackinfo', ctx => {
    let hackMessage = "ABOUT THE HACKATHON \nCASTOR, the latter chapter, will be a 48-hour remarkable event with a vision of upskilling students through events of different technical and entrepreneurial domains, connecting with various tech leaders and inspiring individuals, and providing a platform for a comprehensive exchange of innovation."
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'PROBLEM STATEMENTS', callback_data: 'ps'}
                    ],
                    [
                        { text: 'RULES', callback_data: 'rules'},
                        { text: 'PRIZES', callback_data: 'prizes'},                        
                        { text: 'LOCATION', callback_data: 'loc'}
                    ],
                    [
                        
                        { text: 'HACKATHON THEME', callback_data: 'hacktheme'},
                        { text: 'REMINDER', callback_data: 'rem'}
                    ],
                    [
                        { text: 'RESOURCES', callback_data: 'resources'/* url:'https://www.youtube.com/watch?v=Lt-MY9LQLv0&list=PLX2ojSA27XYhIopdU2RRQIMe7gfwcKL84&index=66&ab_channel=TutorialWeekly' */},
                        { text: 'REGISTRATION COST', callback_data: 'regcost'}
                        
                    ],
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]
                    
                ]
            }
        })
})

bot.action('settings', ctx => {
  
    let hackMessage = "You have entered the settings command."
    
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

bot.action('rules', ctx => {
  
    let hackMessage = "Visit here for the code of conduct of the hackathon - https://devfolio.co/code-of-conduct"
    
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

bot.action('hacktheme', ctx => {
  
    let hackMessage = "Innovate with purpose - hack for a sustainable and efficient future. \nJoin us by developing a ChatBot."
    
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


bot.action('resources', ctx => {
  
    let hackMessage = "Replit Resources: \n1. https://youtu.be/vrEtQ3nEVAc \n2. https://youtu.be/YqwEWAXIGR0 \n3. https://youtu.be/QJR8WHDYWZo"
    
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

bot.command('fortune', (ctx) => {
    axios.get('http://yerkee.com/api/fortune')
        .then(res => {
            console.log(res.data.fortune);
            ctx.reply(res.data.fortune)
        }).catch(e => {
            console.log(e);
        })

})


bot.action('regcost', ctx => {
    
    let hackMessage = "Don't break the bank, join us for free!"
    
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

bot.action('loc', ctx => {
    
    let hackMessage = "This hackathon will be conducted in online mode."
    
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

bot.action('prizes', ctx => {
    
    let hackMessage = "PRIZE POOL - $1,500 \nPARTNERS:\nPolygon $350 \nFilecoin $250 \nReplit $50 \nSolana $850 \n\nYou can also visit the site - https://castor23.netlify.app/#prizes"
    
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
    
    bot.telegram.sendMessage(ctx.chat.id, 'Select your batch.',
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '2023 / 2024 / 2025', callback_data: 'ps'}                    
                    ],
                    [
                        { text: '2026', callback_data: 'N2'}                
                    ]
    
                ]
            
            }
        })
    })

bot.action('ps', ctx => {
    
        let hackMessage = "1. Order Booking Bot \n2. FAQ bot for Student-led Hackathon \n3. Language Leaning Bot \n4. Job Search Bot"
        
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

// bot.action('ps', ctx => {
    
//     bot.telegram.sendMessage(ctx.chat.id, 'PROBLEM STATEMENTS:',
//         {
//             reply_markup: {
//                 inline_keyboard: [
//                     [
//                         { text: 'Or', callback_data: 'N1'}                    
//                     ],
//                     [
//                         { text: 'NAME2', callback_data: 'N2'}                
//                     ],
//                     [
//                         { text: 'NAME3', callback_data: 'N3'}                    
//                     ],
//                     [
//                         { text: 'NAME4', callback_data: 'N4'}                    
//                     ]
    
//                 ]
            
//             }
//         })
//     })

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
                            { text: 'TEAM SIZE', callback_data: 'ts'},
                            { text: 'TIMELINE', callback_data: 'timeline'},
                            { text: 'CONTACT', callback_data: 'contact'}                           
                        ],
                        [
                            { text: 'WHO CAN PARTICIPATE', callback_data: 'wcp'}                            
                        ]
                        
                    ]
                }
            })
    })

    bot.action('ts', ctx => {
    
        let hackMessage = '1-4 members'
        
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
    
        let hackMessage = 'Open to all, big ideas welcome - hack with us!'
        
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
    
        let hackMessage = "Registration starts - 9 Jan 2023, 8PM \nRegistration ends 27 Jan 2023, 3PM \nHackathon starts - 28 Jan 2023, 12AM \nHackathon ends - 29 Jan 2023, 10AM \nResults announced 29 Jan 2023 8PM"
        
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
    
        let hackMessage = 'Connect with us!'
        
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
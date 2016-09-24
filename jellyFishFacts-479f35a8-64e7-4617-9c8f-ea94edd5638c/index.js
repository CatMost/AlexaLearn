'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Space Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "A group of jellyfish is called a 'bloom', 'swarm' or 'smack'.",
    "Jellyfish use their tentacles to sting.",
    "Jellyfish can clone themselves.",
    "Jellyfish don't have brains. Instead, jellyfish have nerve nets which sense changes in the environment and coordinate the animal's responses.",
    "Glowing jellyfish goo could power medical devices. Another jellyfish-derived product takes advantage of the jellies' fluorescent protein, and could be used to power medical devices in the future.",
    "Jellyfish might take over the ocean. You may have heard that jellyfish are taking over the world's oceans. However, there's actually a good deal of debate about this issue among scientists.",
    "Jellyfish are plankton and are not strong swimmers, so they are at the mercy of the ocean currents.",
    "Some jellyfish have millions of very small stinging cells in their tentacles called nematocysts.",
    "Jellyfish are invertebrates meaning that they have no vertebra.",
    "Jellyfish do not have a respiratory system since their skin is thin enough that the body is oxygenated by diffusion.",
    "Jellyfish are composed of more than 90% water.",
    "Box jellyfish venom is the most deadly in the animal kingdon and has caused at least 5,568 recorded deaths since 1954. Each tentacle has about 500,000 sindasites which are harpoon shaped needles that inject venom into the victim.",
    "Jellyfish are awesome possom!"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};

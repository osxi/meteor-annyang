# meteor-annyang

A tiny javascript Speech Recognition library that lets your users control your site with voice commands.

## Globals

`annyang` is exposed on the client.

## Example

```
// Let's define a command
var commands = {
  'hello': function() { alert('Hello world!'); }
};

// Add our commands to annyang
annyang.addCommands(commands);

// Start listening.
annyang.start();
```

## Further Reading

For more info, see [TalAter/annyang](https://github.com/TalAter/annyang).

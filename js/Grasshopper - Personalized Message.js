// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
// Use conditionals to return the proper message:
//
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
  if (name == owner) return "Hello boss";
  if (name !== owner) return "Hello guest"
}

// python code
def greet(name, owner):
    return "Hello {}".format("boss" if name == owner else "guest")

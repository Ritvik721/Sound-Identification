//https://teachablemachine.withgoogle.com/models/pNK8n6UUS/

function startClassification()
{
    navigation.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pNK8n6UUS/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
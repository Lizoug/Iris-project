import { Row, Col } from 'antd';

export function Home() {
    return (
        <div className="babyblue-body">
            <div className="babyblue-body">
                <div className="page-container">
                    <Row justify={"space-around"}>
                        <Col className="title-col first-title-col" span={11}>
                            <h2 className="page-h2">Worum geht's?</h2>
                        </Col>
                        <Col className="title-col" span={11}>
                            <h2 className="page-h2">Machine Learning</h2>
                        </Col>
                    </Row>
                    <Row justify={"space-around"}>
                        <Col span={11}>
                            <div className="page-box page-box-text">
                                <p className="page-p">
                                    Wenn man sich mit Machine Learning befasst, kommt man an diesem Datensatz nicht vorbei: dem „Iris Flower Data Set“ des Biologen und Statistiker Ronald Fisher, welches dieser 1936 vorgestellt hat. Der Datensatz besteht aus jeweils 50 Beispielen dreier Iris-Arten (Iris setosa, Iris virginica and Iris versicolor). Für jede der 150 Blumen sind – neben ihrer Art – vier Merkmale erhoben: Länge und Breite der Blütenblätter (petal length, petal width) sowie Länge und Breite der Kelchblätter (sepal length, sepal width).
                                    <br /><br />
                                    Der Datensatz wird oft in Form einer Scatter-Matrix dargestellt, in der jedes der vier Merkmale mit jedem anderen paarweise in einer zweidimensionalen Punktwolke dargestellt wird. Die drei verschiedenen Iris-Arten sind dabei farbig codiert.
                                </p>
                            </div>
                        </Col>

                        <Col span={11}>

                            <div className="page-box page-box-text">
                                <p className="page-p">
                                    Stellen Sie sich vor, Sie haben eine schöne Iris-Blume in der Hand und möchten ihre Art wissen. Wie können Sie das schnell und einfach herausfinden? Mit Machine Learning! Auf dieser Website wird ein Modell vorgestellt, das die Art einer Iris-Blume anhand ihrer Merkmale vorhersagen kann. Es wurde der k-Nearest-Neighbors (k-NN) Algorithmus verwendet, einer der einfachsten Algorithmen im Machine Learning. Dieser Algorithmus schaut sich die k nächsten Iris-Blumen an, die schon bekannt sind, und weist die häufigste Art zu.
                                    <br /><br />
                                    Das Modell wurde auf einem bekannten Datensatz trainiert und seine Vorhersagen visuell dargestellt. Es wurde ein Scatterplot erstellt, das die Länge und Breite der Kelchblätter und Blütenblätter zeigt.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

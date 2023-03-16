import { Row, Col } from 'antd';

export function Home() {
    return (
        <div className="body">
            <Row>
                <Col span={12}>
                    <h1 className="yellow-text">Worum geht's?</h1>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <div className="middle-text">
                        <p className="body-text">
                            Wenn man sich mit Machine Learning befasst, kommt man an diesem Datensatz nicht vorbei: dem „Iris Flower Data Set“ des Biologen und Statistiker Ronald Fisher, welches dieser 1936 vorgestellt hat. Der Datensatz besteht aus jeweils 50 Beispielen dreier Iris-Arten (Iris setosa, Iris virginica and Iris versicolor). Für jede der 150 Blumen sind – neben ihrer Art – vier Merkmale erhoben: Länge und Breite der Blütenblätter (petal length, petal width) sowie Länge und Breite der Kelchblätter (sepal length, sepal width).
                            <br /><br />
                            Der Datensatz wird oft in Form einer Scatter-Matrix dargestellt, in der jedes der vier Merkmale mit jedem anderen paarweise in einer zweidimensionalen Punktwolke dargestellt wird. Die drei verschiedenen Iris-Arten sind dabei farbig codiert.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}



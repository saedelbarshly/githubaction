EXPECTED="Hello, Test!"

OUTPUT=$(node -e "const app = require('.src/app'); console.log(app('Test!'))")

if [ "$OUTPUT" == "$EXPECTED" ]; then
    echo "Test passed 👌"
    exit 0
else
    echo "Expected '$EXPECTED' but got '$OUTPUT'"
    exit 1
fi